// Lê todos os markdowns de content/ (recursivo) e gera agent/lib/knowledge.generated.ts
// com os artigos quebrados em trechos (chunks) prontos para indexação BM25.
//
// Uso: node scripts/build-knowledge.mjs

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const CONTENT_DIR = join(ROOT, "content");
const OUTPUT = join(ROOT, "agent", "lib", "knowledge.generated.ts");

// Tamanho alvo de cada trecho, em caracteres. Trechos menores dão buscas mais
// precisas; maiores dão mais contexto por resultado.
const TARGET_CHUNK_CHARS = 1200;

async function listMarkdown(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMarkdown(full)));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) files.push(full);
  }
  return files.sort();
}

// Detecta o idioma do artigo contando palavras muito comuns de cada língua.
const EN_WORDS = new Set(["the", "and", "of", "to", "is", "that", "with", "for", "this", "are", "it", "you"]);
const PT_WORDS = new Set(["de", "que", "não", "uma", "para", "com", "é", "os", "do", "da", "em", "você"]);

function detectLanguage(text) {
  let en = 0;
  let pt = 0;
  for (const word of text.toLowerCase().split(/[^a-zà-ú]+/)) {
    if (EN_WORDS.has(word)) en++;
    if (PT_WORDS.has(word)) pt++;
  }
  // Artigos mistos (português com citações em inglês) ficam como português.
  return en > pt * 2 ? "en" : "pt";
}

function slugToTitle(slug) {
  return slug.replace(/[-_]+/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

// Separa o markdown em seções por cabeçalho (##, ###...) e agrupa parágrafos
// de cada seção em trechos de ~TARGET_CHUNK_CHARS.
function chunkMarkdown(body) {
  const sections = [];
  let current = { heading: "", lines: [] };
  for (const line of body.split("\n")) {
    const match = /^#{2,6}\s+(.*)$/.exec(line);
    if (match) {
      if (current.lines.join("").trim()) sections.push(current);
      current = { heading: match[1].trim(), lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  if (current.lines.join("").trim()) sections.push(current);

  const chunks = [];
  for (const section of sections) {
    const paragraphs = section.lines
      .join("\n")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    let buffer = "";
    for (const paragraph of paragraphs) {
      if (buffer && buffer.length + paragraph.length > TARGET_CHUNK_CHARS) {
        chunks.push({ heading: section.heading, text: buffer });
        buffer = "";
      }
      buffer = buffer ? `${buffer}\n\n${paragraph}` : paragraph;
    }
    if (buffer) chunks.push({ heading: section.heading, text: buffer });
  }
  return chunks;
}

function countBy(items, key) {
  const counts = {};
  for (const item of items) counts[item[key]] = (counts[item[key]] ?? 0) + 1;
  return Object.entries(counts).map(([k, v]) => `${k}=${v}`).join(", ");
}

const files = await listMarkdown(CONTENT_DIR);
const articles = [];
const chunks = [];

for (const file of files) {
  const raw = (await readFile(file, "utf8")).replace(/\r\n/g, "\n").trim();
  if (!raw) continue;

  const path = relative(CONTENT_DIR, file).split(sep).join("/");
  const id = path.replace(/\.md$/i, "");
  const collection = path.includes("/") ? path.split("/")[0] : "";
  const titleMatch = /^#\s+(.*)$/m.exec(raw);
  const title = (titleMatch?.[1] ?? slugToTitle(id.split("/").pop())).replace(/\s+/g, " ").trim();
  const body = titleMatch ? raw.replace(titleMatch[0], "").trim() : raw;

  const language = detectLanguage(raw);

  articles.push({ id, title, collection, language });
  chunkMarkdown(body).forEach((chunk, index) => {
    chunks.push({ id: `${id}#${index}`, articleId: id, title, collection, language, ...chunk });
  });
}

const source = `// Arquivo gerado por scripts/build-knowledge.mjs — não edite à mão.
// Fonte: content/ (${articles.length} artigos, ${chunks.length} trechos).
// Idiomas: ${countBy(articles, "language")}.

export type KnowledgeLanguage = "pt" | "en";

export interface KnowledgeArticle {
  id: string;
  title: string;
  collection: string;
  language: KnowledgeLanguage;
}

export interface KnowledgeChunk {
  id: string;
  articleId: string;
  title: string;
  collection: string;
  language: KnowledgeLanguage;
  heading: string;
  text: string;
}

export const articles: KnowledgeArticle[] = ${JSON.stringify(articles)};

export const chunks: KnowledgeChunk[] = ${JSON.stringify(chunks)};
`;

await writeFile(OUTPUT, source);
console.log(
  `knowledge: ${articles.length} artigos (${countBy(articles, "language")}), ${chunks.length} trechos -> ${relative(ROOT, OUTPUT)}`,
);
