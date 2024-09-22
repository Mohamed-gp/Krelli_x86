import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// console.log(process.env.VITE_GOOGLE_KEY);

export default defineConfig({
  plugins: [
    react(),
    // eslint()
  ],
  server: {
    port: 5001,
    host: true,
    hmr: {
      protocol: "wss", // wss not wss for sucurity
      host:
        process.env.VITE_ENV == "development"
          ? "localhost"
          : "krelli1.production-server.tech",
    },
  },

  css: {
    devSourcemap: process.env.VITE_ENV != "development",
  },
});
