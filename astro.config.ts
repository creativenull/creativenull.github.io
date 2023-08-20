import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import { config } from "./src/config";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: config.siteUrl,
  integrations: [solid(), mdx(), UnoCSS({ injectReset: true })],
});
