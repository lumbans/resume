import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/resume/", // For https://lumbans.github.io/resume/
  build: {
    sourcemap: false, // Prevent /src/main.tsx requests
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    minify: "esbuild",
    cssCodeSplit: false,
  },
});
