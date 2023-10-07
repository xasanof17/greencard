/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./18n.ts");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = withNextIntl(nextConfig);
