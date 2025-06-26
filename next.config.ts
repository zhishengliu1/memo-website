import type { NextConfig } from "next";

const repo = "memo-website";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // basePath: isGithubPages ? `/${repo}` : "",
  // assetPrefix: isGithubPages ? `/${repo}/` : "",
  /* config options here */
};

export default nextConfig;
