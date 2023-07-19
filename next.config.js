/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PROXY_CURL_API_KEY: process.env.PROXY_CURL_API_KEY
  }
}

module.exports = nextConfig
