import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable react strict mode for development
  reactStrictMode: true,
  
  // Ensure trailing slash behavior is consistent
  trailingSlash: false,
  
  // Enable powered by header removal for security
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Configure image optimization
  images: {
    // Add domains if you're using external images
    domains: [],
  },
};

export default nextConfig;