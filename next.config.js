/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    minimumCacheTTL: 31536000,
  },
  output: "export",
};

module.exports = nextConfig;
