/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "cdn.builder.io",
      "saintvisionai.com",
      "saintvisional.com",
      "lending.saintvisiongroup.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.fly.dev",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@builder.io/react"],
  },
};

module.exports = nextConfig;
