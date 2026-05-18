import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  experimental: {
    proxyClientMaxBodySize: 20 * 1024 * 1024,
  },
  
  async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:5000/:path*"
    },
  ];
}
};

export default nextConfig;
