import { defineConfig } from "astro/config";
import WindiCSS from "vite-plugin-windicss"
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  integrations: [solid()],
  vite: {
    plugins: [WindiCSS()]
  }
});
