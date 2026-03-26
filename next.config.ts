import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wearableapparels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
