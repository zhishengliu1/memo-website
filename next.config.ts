import type { NextConfig } from "next";

const repo = "memo-website";

// This ensures Vercel and local development use root paths, while GitHub Pages uses the correct prefix.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  // Expose basePath to the client
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repo}` : "",
  },
  // ...other config options
};

export default nextConfig;
