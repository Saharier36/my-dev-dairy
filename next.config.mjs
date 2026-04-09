/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
