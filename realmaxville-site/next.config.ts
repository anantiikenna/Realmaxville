import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "realmaxvillee.local" },
      { protocol: "https", hostname: "realmaxville.com" },
    ],
  },
};

export default nextConfig;
