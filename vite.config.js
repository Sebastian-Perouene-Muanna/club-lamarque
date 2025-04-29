import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/club-lamarque/",   // 👈 cambia de "club-app" a "club-lamarque"
  plugins: [react()],
});
