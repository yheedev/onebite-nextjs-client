/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
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
