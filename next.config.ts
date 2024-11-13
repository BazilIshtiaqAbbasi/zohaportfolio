import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {protocol:"https",hostname:"assets.aceternity.com"},
      {protocol:"https",hostname:"aceternity.com"},
      {protocol:"https",hostname:"pbs.twimg.com"},
      {protocol:"https",hostname:"images.unsplash.com"},
    ]
  }
};

export default nextConfig;
