import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // We've fixed errors, so we can now enforce strict builds for Vercel
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    parallelServerCompiles: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
