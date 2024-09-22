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
    hmr: {
      protocol: "ws",
      host: process.env.NODE_ENV == "development" ? "localhost" : "krelli.production-server.tech",
    }
  },
  

  css: {
    devSourcemap: process.env.NODE_ENV == "development",
  },
});
