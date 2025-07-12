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
  // Optimize for Azure deployment
  trailingSlash: false,
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
