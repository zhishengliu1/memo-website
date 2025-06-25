import type { NextConfig } from "next";

const repo = "memo-website";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  /* config options here */
};

export default nextConfig;
