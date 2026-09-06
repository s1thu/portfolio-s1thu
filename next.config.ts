import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add your repository name as the base path only in production
  // Replace 'your-repository-name' with your exact GitHub repo name
  basePath: isProd ? "/your-repository-name" : "",
};

export default nextConfig;
