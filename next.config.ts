import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
