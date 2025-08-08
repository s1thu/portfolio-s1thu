/**
 * @type {import('next').NextConfig}
 */
const nextConfig: import("next").NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
