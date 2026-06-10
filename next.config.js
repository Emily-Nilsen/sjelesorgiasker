/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
}

module.exports = nextConfig
