import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import { config } from "./src/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: config.siteUrl,
  integrations: [mdx(), UnoCSS({ injectReset: true })],
});
