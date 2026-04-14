/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/:path*",   //node backend server url
      },
    ];
  }
};

export default nextConfig;
