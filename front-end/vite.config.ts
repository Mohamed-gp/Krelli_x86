import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint()
  ],
  server: {
    port: 5001,
    host: true,
  },

  css: {
    devSourcemap: process.env.NODE_ENV == "development",
  },
});
