/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  // Specify dependencies to bundle on the server
  serverDependenciesToBundle: [/^(?!react-hook-form).*$/],

  // Default configurations
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",

  // Add other configurations here as needed
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs", // CommonJS format for server
  future: {
    v2_routeConvention: true,
  },
};

export default config;


