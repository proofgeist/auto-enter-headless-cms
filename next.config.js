/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "demo-ub-dmz.ottomatic.cloud"]
  },
  experimental: { images: { allowFutureImage: true } }
};

module.exports = nextConfig;
