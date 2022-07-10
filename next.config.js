/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"]
  },
  experimental: { images: { allowFutureImage: true } }
};

module.exports = nextConfig;
