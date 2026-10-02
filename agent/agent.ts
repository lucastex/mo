import { defineAgent } from "eve";
import { openai } from "eve/models/openai";

export default defineAgent({
  // Chamada direta à OpenAI (usa OPENAI_API_KEY).
  model: openai("gpt-5.6-terra"),
  modelOptions: {
    providerOptions: {
      // Não guardar as conversas na OpenAI. Com store=false o SDK pede o
      // raciocínio criptografado e o reenvia a cada turno, então conversas
      // longas continuam funcionando sem nada salvo no servidor deles.
      openai: { store: false },
    },
  },
  // Agente de conversa com pais: sem shell, arquivos ou web. Só as tools de
  // agent/tools/ (busca na base de conhecimento).
  defaultTools: false,
});
