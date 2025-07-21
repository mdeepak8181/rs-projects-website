/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'www.rsprojects.ca'],
  },
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
