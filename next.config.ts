import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/solutions/AI-based-bus-scheduling",
        destination: "/solutions/advanced-scheduling-system",
        permanent: true,
      },
      {
        source: "/solutions/Control-room-management",
        destination: "/solutions/fleet-management",
        permanent: true,
      },
      {
        source: "/solutions/Performance-monitoring",
        destination: "/solutions/ai-monitoring-and-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
