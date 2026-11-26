import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `pnpm build` writes a deployable site to `out/`.
  output: "export",
  // Emit /en/index.html etc. so every static host serves clean URLs.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
