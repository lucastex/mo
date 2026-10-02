import { createMemoryState } from "@chat-adapter/state-memory";
import { createZernioAdapter, type ZernioRawMessage } from "@zernio/chat-sdk-adapter";
import type { Message, Thread } from "chat";
import { defineChannel, POST } from "eve/channels";
import { chatSdkChannel } from "eve/channels/chat-sdk";
import { transcreverAudio } from "../lib/transcrever";

// WhatsApp via Zernio. Webhook: POST /webhooks/zernio
//
// Só liga com ZERNIO_API_KEY e ZERNIO_WEBHOOK_SECRET preenchidas. Sem o secret o
// adapter aceitaria webhooks sem assinatura, e qualquer um poderia mandar
// mensagens falsas (gastando a API da OpenAI). Sem as duas, a rota responde 503
// e o resto do agente funciona normalmente. As variáveis são lidas no
// build: depois de preenchê-las, reinicie o `eve dev` ou faça um novo deploy.
const apiKey = process.env.ZERNIO_API_KEY;
const webhookSecret = process.env.ZERNIO_WEBHOOK_SECRET;
// O webhook do Zernio entrega mensagens de todas as contas conectadas (inclusive
// outros números de WhatsApp de outros projetos). Com ZERNIO_ACCOUNT_ID, este
// agente atende só a conta desse número e ignora as demais.
const accountId = process.env.ZERNIO_ACCOUNT_ID;

// Enviada assim que chega um áudio, antes da transcrição (que leva alguns segundos).
const OUVINDO_AUDIO = [
  "Só um minutinho, já vou escutar seu áudio 🎧",
  "Espera aí que estou ouvindo seu áudio 💛",
  "Recebi seu áudio! Deixa eu ouvir com calma 🎧",
  "Um instante, estou escutando o que você me mandou 🌱",
  "Já já te respondo, só vou ouvir seu áudio rapidinho 🤗",
  "Opa, chegou seu áudio! Vou escutar aqui 🎧",
  "Me dá só um momentinho pra ouvir seu áudio ✨",
  "Estou ouvindo, já te respondo 💛",
  "Deixa eu escutar seu áudio e já volto aqui 🌱",
  "Recebido! Só um instantinho que estou ouvindo 🎧",
];

const AUDIO_FALHOU =
  "Ai, não consegui ouvir esse áudio direitinho 😕 Pode tentar mandar de novo, ou me escrever por texto? 💛";

const MIDIA_NAO_SUPORTADA =
  "Oi! 💛 Por enquanto eu ainda não consigo ver imagens, vídeos ou arquivos. Pode me contar o que queria me mostrar por texto ou por áudio? Estou aqui 🌱";

// Última mensagem de "ouvindo" usada em cada conversa, para não repetir a mesma
// duas vezes seguidas. Fica em memória: zera ao reiniciar, o que não tem problema.
const ultimaOuvindo = new Map<string, number>();

function sortearOuvindo(threadId: string): string {
  const anterior = ultimaOuvindo.get(threadId);
  let indice = Math.floor(Math.random() * OUVINDO_AUDIO.length);
  if (indice === anterior) indice = (indice + 1) % OUVINDO_AUDIO.length;
  ultimaOuvindo.set(threadId, indice);
  return OUVINDO_AUDIO[indice];
}

function createWhatsAppChannel(apiKey: string, webhookSecret: string) {
  const { bot, channel, send } = chatSdkChannel({
    userName: "Lar Montessori",
    adapters: {
      zernio: createZernioAdapter({ apiKey, webhookSecret }),
    },
    route: "/webhooks",
    // TODO(produção): trocar por um state durável (ex.: @chat-adapter/state-redis),
    // para a deduplicação de webhooks sobreviver a reinícios e a múltiplas instâncias.
    state: createMemoryState(),
    // WhatsApp não edita mensagens já enviadas: manda a resposta inteira de uma vez.
    streaming: false,
    // No WhatsApp é comum mandar várias mensagens seguidas. O padrão do Chat SDK
    // ("drop") descartaria as que chegam enquanto a anterior é processada; com
    // "concurrent" todas chegam ao agente e entram no turno em andamento (steer),
    // que responde uma vez considerando todas.
    concurrency: "concurrent",
  });

  // Todas as conversas do inbox do Zernio chegam como mensagem direta. Atende só
  // o WhatsApp e ignora comentários em posts e outras redes conectadas no Zernio.
  bot.onDirectMessage(async (thread: Thread, message: Message) => {
    const raw = message.raw as Partial<ZernioRawMessage> | undefined;
    if (raw?.platform !== "whatsapp") return;
    if (thread.id.includes(":comment:")) return;
    // thread.id tem o formato "zernio:{accountId}:{conversationId}".
    if (accountId && thread.id.split(":")[1] !== accountId) return;

    const text = message.text?.trim();
    const anexos = raw.attachments ?? [];
    const audio = anexos.find((anexo) => anexo.type === "audio");

    // Áudio: avisa que vai ouvir, transcreve e segue como se fosse texto digitado.
    if (audio) {
      await thread.post(sortearOuvindo(thread.id));
      let transcricao: string;
      try {
        transcricao = await transcreverAudio(audio.url);
      } catch (error) {
        console.error("[zernio] falha ao transcrever áudio", error);
        await thread.post(AUDIO_FALHOU);
        return;
      }
      if (!transcricao) {
        await thread.post(AUDIO_FALHOU);
        return;
      }
      await send(text ? `${text}\n\n${transcricao}` : transcricao, { thread });
      return;
    }

    // Foto, vídeo, figurinha, arquivo etc. sem texto.
    if (!text) {
      await thread.post(MIDIA_NAO_SUPORTADA);
      return;
    }

    // Mídia com legenda: o agente responde à legenda, sabendo que não vê o anexo.
    if (anexos.length > 0) {
      await send(
        `${text}\n\n[A pessoa também enviou uma imagem, vídeo ou arquivo que você não consegue ver. ` +
          `Se precisar do conteúdo, peça com carinho para ela contar por texto ou por áudio.]`,
        { thread },
      );
      return;
    }

    await send(text, { thread });
  });

  return channel;
}

const notConfigured = defineChannel({
  routes: [
    POST("/webhooks/zernio", () =>
      Response.json({ error: "WhatsApp (Zernio) não configurado: defina ZERNIO_API_KEY e ZERNIO_WEBHOOK_SECRET." }, { status: 503 }),
    ),
  ],
});

export default apiKey && webhookSecret ? createWhatsAppChannel(apiKey, webhookSecret) : notConfigured;
