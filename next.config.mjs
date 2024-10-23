/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1650, 1920, 2048, 3840],
      // unoptimized: true,
      // remotePatterns: [
      //   {
      //     protocol: 'https',
      //     hostname: '',
      //     port: '',
      //   },
      // ],
      // domains: ["10.8.215.23"],
    },
    reactStrictMode: true,
    experimental: {
      optimizePackageImports: [
        '@pbe/react-yandex-maps',
        '@reduxjs/toolkit',
        'react-redux',
        'react-markdown',
        'remark-gfm',
        "classnames",
        "date-fns",
        "framer-motion",
        "sass",
        "sharp",
      ],
    },
    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     use: ["@svgr/webpack"]
    //   });
  
    //   return config;
    // }
  };
  
  export default nextConfig;
