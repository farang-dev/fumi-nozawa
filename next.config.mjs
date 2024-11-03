/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disable Image Optimization to avoid issues with export
  },
};

export default nextConfig;
