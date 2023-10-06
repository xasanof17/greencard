/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./18n.ts");

const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = withNextIntl(nextConfig);
