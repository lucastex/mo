import { defineTool } from "eve/tools";
import { z } from "zod";
import { searchKnowledge } from "../lib/knowledge";

export default defineTool({
  description:
    "Busca em TODA a base de conhecimento Montessori (educação, desenvolvimento infantil, rotina em casa, " +
    "limites, emoções, sono, alimentação, materiais etc.). A base tem artigos em português e em inglês, e cada " +
    "chamada busca nos dois: os artigos em português com `consulta_pt` e os artigos em inglês com `consulta_en`. " +
    "Os dois campos são obrigatórios e devem expressar o mesmo tema em cada idioma (traduza os termos, não a " +
    "frase). Use palavras-chave, não a frase inteira do usuário. Retorna os trechos mais relevantes de cada " +
    "idioma, ordenados por relevância (BM25), com no máximo 2 trechos por artigo.",
  inputSchema: z.object({
    consulta_pt: z
      .string()
      .min(2)
      .describe("Palavras-chave em português, ex.: 'castigo limites birra'."),
    consulta_en: z
      .string()
      .min(2)
      .describe("As mesmas palavras-chave em inglês, ex.: 'punishment limits tantrum'."),
    quantidade: z
      .number()
      .int()
      .min(1)
      .max(10)
      .optional()
      .describe("Quantos trechos retornar por idioma (padrão 5)."),
  }),
  label: {
    start: ({ consulta_pt, consulta_en }) => `Buscando "${consulta_pt}" / "${consulta_en}" na base de conhecimento`,
  },
  async execute({ consulta_pt, consulta_en, quantidade }) {
    const limit = quantidade ?? 5;
    const artigos_pt = searchKnowledge("pt", consulta_pt, limit);
    const artigos_en = searchKnowledge("en", consulta_en, limit);
    if (artigos_pt.length === 0 && artigos_en.length === 0) {
      return { artigos_pt, artigos_en, aviso: "Nenhum trecho encontrado. Tente outras palavras-chave." };
    }
    return { artigos_pt, artigos_en };
  },
});
