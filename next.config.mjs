/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URI: process.env.API_URI,
    URI: process.env.URI,
  },
};

export default nextConfig;
