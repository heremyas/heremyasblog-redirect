/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://blog.akademyas.co",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
