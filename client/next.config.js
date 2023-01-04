/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    allowMiddlewareResponseBody: true
  },
  reactStrictMode: true,
  env: {
    baseURL: 'Your ip and port',
    JWT_SECRET: 'Your jwt secret'
  }
}

module.exports = nextConfig
