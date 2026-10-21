import type { NextConfig } from "next";

const repoName = "personal-plus";
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages hosts a static export; DEPLOY_TARGET=github-pages is set in
  // the deploy workflow. Local dev and future SSR hosts use defaults.
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  transpilePackages: ["@pp/schemas", "@pp/ai", "@pp/renderer"],
};

export default nextConfig;
