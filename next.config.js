/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["cdn.builder.io"],
    unoptimized: true,
  },
  // Vercel optimization
  experimental: {
    serverComponentsExternalPackages: ["@builder.io/react"],
  },
  // Build optimization
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
