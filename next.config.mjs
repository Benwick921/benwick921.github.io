/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable Image Optimization for static export
      },
      trailingSlash: true, // Ensures proper routing
      //basePath: "/benwick.github.io", // Use your repo name
      assetPrefix: 'https://benwick921.github.io/', // Ensures CSS/JS loads correctly
      //assetPrefix: './', // Ensures CSS loads correctly locally but disable when uploading to hosting site
};
//module.exports = nextConfig;
export default nextConfig;
