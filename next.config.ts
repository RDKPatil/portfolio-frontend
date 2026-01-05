import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* 
   * Vercel handles compression and caching automatically.
   * Image optimization is enabled by default for local assets.
   * If using external images, add domains here.
   */
};

export default nextConfig;
