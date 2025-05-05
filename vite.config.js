import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/club-lamarque/",  // Esto debe coincidir con el nombre del repositorio
  plugins: [react()],
});
