// next.config.js or next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* other config options here if you have them */

  // Keep your existing image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: '',
        // pathname: '/account123/**',
      },
      // Add other hostnames if needed
    ],
  },

  // === Add these options to ignore errors ===

  // Option to ignore TypeScript errors during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // Option to ignore ESLint errors during build
  eslint: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // !! WARN !!
    ignoreDuringBuilds: true,
  },

  // === End of added options ===
};

export default nextConfig; // Or module.exports = nextConfig;
