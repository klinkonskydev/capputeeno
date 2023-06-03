/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['storage.googleapis.com']
  }
}

module.exports = nextConfig
