import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.137.223.147','192.168.1.3'],
  experimental: {
    // 1. Force Webpack to reduce its maximum memory overhead
    webpackMemoryOptimizations: true,
    
    // 2. Stop preloading every single page module on startup
    preloadEntriesOnStart: false,
    
    // 3. Cache fetch responses during HMR so it doesn't re-run expensive data loops
    serverComponentsHmrCache: true,
  }
};


export default nextConfig;
