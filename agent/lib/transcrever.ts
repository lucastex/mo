// Transcreve áudios do WhatsApp com o Whisper da OpenAI (usa OPENAI_API_KEY).

// O Whisper descobre o formato pela extensão do arquivo. Áudio de voz do
// WhatsApp chega como OGG/Opus.
const EXTENSOES: Record<string, string> = {
  "audio/ogg": "ogg",
  "audio/opus": "ogg",
  "audio/mpeg": "mp3",
  "audio/mp3": "mp3",
  "audio/mp4": "m4a",
  "audio/m4a": "m4a",
  "audio/x-m4a": "m4a",
  "audio/aac": "m4a",
  "audio/wav": "wav",
  "audio/x-wav": "wav",
  "audio/webm": "webm",
};

// Formatos aceitos pelo Whisper, para quando o content-type não ajuda.
const SUPORTADAS = new Set(["flac", "m4a", "mp3", "mp4", "mpeg", "mpga", "oga", "ogg", "wav", "webm"]);

export async function transcreverAudio(url: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY não definida");

  const audio = await fetch(url);
  if (!audio.ok) throw new Error(`Falha ao baixar o áudio: HTTP ${audio.status}`);
  const mimeType = (audio.headers.get("content-type") ?? "audio/ogg").split(";")[0].trim().toLowerCase();
  const extensaoDaUrl = new URL(url).pathname.match(/\.(\w+)$/)?.[1]?.toLowerCase();
  const extensao =
    EXTENSOES[mimeType] ?? (extensaoDaUrl && SUPORTADAS.has(extensaoDaUrl) ? extensaoDaUrl : "ogg");

  const form = new FormData();
  form.append("file", new Blob([await audio.arrayBuffer()], { type: mimeType }), `audio.${extensao}`);
  form.append("model", "whisper-1");
  form.append("language", "pt");

  const resposta = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });
  if (!resposta.ok) {
    throw new Error(`Falha na transcrição: HTTP ${resposta.status} ${await resposta.text()}`);
  }
  const { text } = (await resposta.json()) as { text?: string };
  return text?.trim() ?? "";
}
