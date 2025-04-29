import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/club-lamarque/", // Este valor debe coincidir con el nombre del repositorio en GitHub
  plugins: [react()],
});
