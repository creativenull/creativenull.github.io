import { defineConfig, presetTypography, presetWind } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetWind(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],

  theme: {
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
      jetbrains: ["JetBrains Mono", "monospace"],
      righteous: ["Righteous", "cursive"],
    },
  },
});
