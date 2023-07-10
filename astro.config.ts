import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: "https://creativenull.xyz",
  integrations: [solid(), mdx(), UnoCSS({ injectReset: true })],
});
