import { create, insertMultiple, search, type Orama } from "@orama/orama";
import { stemmer as stemmerEn } from "@orama/stemmers/english";
import { stemmer as stemmerPt } from "@orama/stemmers/portuguese";
import { stopwords as stopwordsEn } from "@orama/stopwords/english";
import { stopwords as stopwordsPt } from "@orama/stopwords/portuguese";
import { articles, chunks, type KnowledgeLanguage } from "./knowledge.generated";

const schema = {
  id: "string",
  title: "string",
  heading: "string",
  text: "string",
} as const;

type KnowledgeIndex = Orama<typeof schema>;

// Cada idioma tem seu próprio índice BM25, com stemming e stopwords da língua:
// "castigo/castigar/castigos" (pt) e "punish/punishment/punishing" (en) caem no
// mesmo radical. Acentos são ignorados.
const languages = {
  pt: { language: "portuguese", stemmer: stemmerPt, stopWords: stopwordsPt },
  en: { language: "english", stemmer: stemmerEn, stopWords: stopwordsEn },
} as const;

const indexes = new Map<KnowledgeLanguage, KnowledgeIndex>();

// Índices em memória, criados na primeira busca e reaproveitados depois.
function getIndex(lang: KnowledgeLanguage): KnowledgeIndex {
  const existing = indexes.get(lang);
  if (existing) return existing;
  const { language, stemmer, stopWords } = languages[lang];
  const index = create({
    schema,
    components: { tokenizer: { language, stemming: true, stemmer, stopWords } },
  }) as KnowledgeIndex;
  insertMultiple(
    index,
    chunks
      .filter((chunk) => chunk.language === lang)
      .map(({ id, title, heading, text }) => ({ id, title, heading, text })),
  );
  indexes.set(lang, index);
  return index;
}

const chunkById = new Map(chunks.map((chunk) => [chunk.id, chunk]));
const articleById = new Map(articles.map((article) => [article.id, article]));

export interface SearchHit {
  articleId: string;
  title: string;
  heading: string;
  score: number;
  text: string;
}

export function searchKnowledge(lang: KnowledgeLanguage, query: string, limit: number): SearchHit[] {
  const result = search(getIndex(lang), {
    term: query,
    properties: ["title", "heading", "text"],
    boost: { title: 3, heading: 2 },
    // Tolera pequenos erros de digitação ("castgo" -> "castigo").
    tolerance: 1,
    // Busca mais trechos do que o pedido para depois limitar por artigo.
    limit: limit * 4,
  }) as { hits: Array<{ id: string; score: number }> };

  const hits: SearchHit[] = [];
  const perArticle = new Map<string, number>();
  for (const { id, score } of result.hits) {
    const chunk = chunkById.get(id);
    if (!chunk) continue;
    // No máximo 2 trechos do mesmo artigo, para diversificar as fontes.
    const count = perArticle.get(chunk.articleId) ?? 0;
    if (count >= 2) continue;
    perArticle.set(chunk.articleId, count + 1);
    hits.push({
      articleId: chunk.articleId,
      title: chunk.title,
      heading: chunk.heading,
      score: Math.round(score * 100) / 100,
      text: chunk.text,
    });
    if (hits.length >= limit) break;
  }
  return hits;
}

export function readArticle(
  articleId: string,
): { title: string; language: KnowledgeLanguage; text: string } | undefined {
  const article = articleById.get(articleId);
  if (!article) return undefined;
  const parts = chunks
    .filter((chunk) => chunk.articleId === articleId)
    .map((chunk) => (chunk.heading ? `## ${chunk.heading}\n\n${chunk.text}` : chunk.text));
  return { title: article.title, language: article.language, text: parts.join("\n\n") };
}
