import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  transpilePackages: ["@pp/schemas", "@pp/ai", "@pp/renderer"],
};

export default nextConfig;
