// remix.config.js
import { config as netlifyConfig } from "@netlify/remix-adapter";
import { esbuildConfig } from './esbuild.config.js';

/** @type {import('@remix-run/dev').AppConfig} */
const remixConfig = {
  ...(process.env.NODE_ENV === "production" ? netlifyConfig : {}),
  future: {
    v2_meta: true, // Enable future Remix features if needed
  },
  webpack: (config) => {
    // Add a loader for .html files
    config.module.rules.push({
      test: /\.html$/,
      type: "asset/source", // Use the appropriate type for handling HTML files
    });
    return config;
  },
  esbuild: esbuildConfig,
};

export default remixConfig;
