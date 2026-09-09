import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Next.js 16: only declared quality values may be requested.
    qualities: [75, 85],
    localPatterns: [{ pathname: "/brand/**", search: "" }],
  },
};

export default nextConfig;
