import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/example/", // numele repo-ului tău GitHub
  plugins: [react()],
});
