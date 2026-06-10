/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  reactStrictMode: true,

  basePath: "/cv",

  compress: true,

  productionBrowserSourceMaps: false,

  poweredByHeader: false,
};

module.exports = nextConfig;
