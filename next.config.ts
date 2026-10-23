import type { NextConfig } from "next";

let rawBackendUrl = (process.env.BACKEND_API_URL || "http://localhost:5000").trim();
if (!rawBackendUrl.startsWith("http://") && !rawBackendUrl.startsWith("https://")) {
  rawBackendUrl = `https://${rawBackendUrl}`;
}
const backendUrl = rawBackendUrl.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
