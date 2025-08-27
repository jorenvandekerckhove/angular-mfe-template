import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Lines needed to create the web component
  build: {
    lib: {
      entry: "./src/index.tsx",
      formats: ["umd"],
      name: "react-app",
      fileName: () => `main.js`,
    },
    target: "esnext",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": {}, // Prevents some libs from erroring
  },
  server: {
    port: 5559
  }
});
