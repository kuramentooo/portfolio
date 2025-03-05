/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
}

module.exports = nextConfig
