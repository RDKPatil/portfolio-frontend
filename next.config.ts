import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Disable server-side optimization to avoid "resolved to private ip" errors on localhost/LAN
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.3.131',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-backend-zwxj.onrender.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
