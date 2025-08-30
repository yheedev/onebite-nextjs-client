/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "12345",
        pathname: "/**",
      },
    ],
    domains: ["shopping-phinf.pstatic.net"],
  },
};

export default nextConfig;
