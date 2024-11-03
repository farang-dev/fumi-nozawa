/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/fumi-nozawa' : '', // replace "my-portfolio" with your repo name
};

module.exports = nextConfig;
