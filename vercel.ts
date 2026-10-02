import { withEve } from "eve/vercel";

export default await withEve({
  // Deploys de produção são feitos pelo GitHub Actions (.github/workflows/deploy.yml).
  // Desliga os deploys automáticos da integração Git do Vercel para não haver
  // dois deploys por push.
  git: { deploymentEnabled: false },
  services: {
    web: {
      framework: "nextjs",
      root: "apps/web",
      buildCommand: "node ../../node_modules/next/dist/bin/next build",
    },
  },
  routes: [
    // Canais custom do agente (ex.: WhatsApp via Zernio em /webhooks/zernio) não
    // são publicados automaticamente: precisam ser roteados para o serviço do eve.
    { src: "^/webhooks/(.*)$", destination: { type: "service", service: "eve" } },
    { src: "^(.*)$", destination: { type: "service", service: "web" } },
  ],
});
