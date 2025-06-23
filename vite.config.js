// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Make sure to import 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Correctly maps '@' to the absolute path of your 'src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
