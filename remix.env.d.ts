// remix.config.js

import { createRequestHandler } from "@remix-run/express";

export default {
  // Other configurations
  
  // Mark 'react-hook-form' as an external module to exclude it from the bundle
  npm: {
    external: ["react-hook-form"]
  },
};
