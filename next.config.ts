import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wearableapparels.com" },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
