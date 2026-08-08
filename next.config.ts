import type { NextConfig } from "next";

const STRATEGY_TOOLKIT_ORIGIN = "https://strategytoolkit.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
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
