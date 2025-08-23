import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react-app",
      filename: "remoteEntry.js",
      // manifest: true,
      exposes: {
        "./App": "./src/bootstrap.tsx", // this file should export a `mount` function
      },
      shared: ["react", "react-dom"],
      // shared: {
      //   react: {
      //     singleton: true,
      //   },
      //   "react/": {
      //     singleton: true,
      //   },
      // },
      // remotes: {
      //   esm_remote: {
      //     type: "module",
      //     name: "esm_remote",
      //     entry: "https://[...]/remoteEntry.js",
      //   },
      //   var_remote: "var_remote@https://[...]/remoteEntry.js",
      // },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
