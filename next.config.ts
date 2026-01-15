import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* 
   * Vercel handles compression and caching automatically.
   * Image optimization is enabled by default for local assets.
   * If using external images, add domains here.
   */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.3.131',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
