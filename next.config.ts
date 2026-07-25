import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel builds/traces routes itself via the Build Output API — "standalone"
  // is only needed for the Docker self-host path (see Dockerfile).
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
};

export default nextConfig;
