import type { NextConfig } from "next";

// Origem do `eve dev` para testes locais (pnpm dev:chat). Em produção o
// roteamento de /eve/v1 é feito por vercel.ts.
const EVE_DEV_ORIGIN = process.env.EVE_DEV_ORIGIN ?? "http://127.0.0.1:2000";

const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV !== "development") return [];
    return [{ source: "/eve/:path*", destination: `${EVE_DEV_ORIGIN}/eve/:path*` }];
  },
};

export default nextConfig;
