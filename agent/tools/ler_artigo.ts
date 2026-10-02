import { defineTool } from "eve/tools";
import { z } from "zod";
import { readArticle } from "../lib/knowledge";

export default defineTool({
  description:
    "Lê o texto completo de um artigo da base de conhecimento. Use quando um trecho retornado por " +
    "buscar_conhecimento for promissor mas faltar contexto para responder bem. O artigo pode estar em " +
    "português ou em inglês; a resposta ao usuário é sempre em português.",
  inputSchema: z.object({
    articleId: z.string().describe("O campo articleId retornado por buscar_conhecimento."),
  }),
  label: {
    start: () => "Lendo artigo completo",
  },
  async execute({ articleId }) {
    const article = readArticle(articleId);
    if (!article) return { erro: `Artigo "${articleId}" não encontrado.` };
    return article;
  },
});
