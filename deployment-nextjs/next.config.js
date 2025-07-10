/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverComponentsExternalPackages: ["isolated-vm"],
  },
  webpack: (config, { isServer, webpack }) => {
    // Fix for isolated-vm package compatibility
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("isolated-vm");

      // Ignore isolated-vm during build
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /isolated-vm/,
        }),
      );
    }

    // Fallback for Node.js modules in client-side
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
    };

    return config;
  },
  images: {
    domains: ["cdn.builder.io"],
    unoptimized: true,
  },
  // Optimize for deployment
  trailingSlash: true,
};

export default nextConfig;
