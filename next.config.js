/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./18n.ts");

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  poweredByHeader: true,
  generateEtags: true,
  swcMinify: true,
  cleanDistDir: true,
  experimental: {
    optimisticClientCache: true,
    serverActions: true,
    serverMinification: true,
    serverSourceMaps: true,
    strictNextHead: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "greencards.uz"],
  },
};

module.exports = withNextIntl(nextConfig);
