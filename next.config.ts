import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-s1thu" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-s1thu/" : "",
};

export default nextConfig;
