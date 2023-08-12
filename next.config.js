/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
    images: {
        remotePatterns: [
          { hostname: "scontent.cdninstagram.com" },
          { hostname: "scontent-iad3-1.cdninstagram.com" },
          { hostname: "scontent-iad3-2.cdninstagram.com" },
          { hostname: "scontent-iad3-1.cdninstagram.com" },
          { hostname: "scontent-iad3-3.cdninstagram.com" },
          { hostname: "scontent-iad3-4.cdninstagram.com" },
        ],
      },
}

module.exports = nextConfig
