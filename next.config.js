/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  env:{
    APP_URL:'https://apimenudev.talabatmenu.com'
  },
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['gti-menu-files.s3.amazonaws.com','howtocookthat.net','www.howtocookthat.net', 'd1z0yyjnntc958.cloudfront.net'],
  },
}

module.exports = nextConfig
