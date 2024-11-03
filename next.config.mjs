/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Ensure this line is present to use the static export feature
  basePath: process.env.NODE_ENV === 'production' ? '/fumi-nozawa' : '', // Adjust this based on your repo name
};

export default nextConfig;
