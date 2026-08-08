import type { NextConfig } from "next";

// URL of the *second* Vercel project deployed from tolabuzz/strategy-toolkit
// — the one with BASE_PATH=/strategy-toolkit set (see that repo's
// next.config.ts). NOT strategytoolkit.vercel.app: that's the standalone
// deployment and must stay untouched by this rewrite. Overridable via env
// var (e.g. if that project's URL ever changes) without a code change.
const STRATEGY_TOOLKIT_ORIGIN =
  process.env.STRATEGY_TOOLKIT_ORIGIN || "https://strategy-toolkit-embedded.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    if (!STRATEGY_TOOLKIT_ORIGIN) return [];
    return [
      {
        source: "/strategy-toolkit",
        destination: `${STRATEGY_TOOLKIT_ORIGIN}/strategy-toolkit`,
      },
      {
        source: "/strategy-toolkit/:path*",
        destination: `${STRATEGY_TOOLKIT_ORIGIN}/strategy-toolkit/:path*`,
      },
    ];
  },
};

export default nextConfig;
