import { defineConfig, presetTypography, presetWind } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetWind(),
    presetTypography({
      cssExtend: {
        strong: { "font-weight": "bold" },
        "pre code": { "font-family": "JetBrains Mono, monospace" },
        "p code": { "font-family": "JetBrains Mono, monospace", padding: "0 5px" },
        "ol code": { "font-family": "JetBrains Mono, monospace", padding: "0 5px" },
        "ul code": { "font-family": "JetBrains Mono, monospace", padding: "0 5px" },
        "a[href^=https]::after": {
          "font-size": "10px",
          content: '"\\f08e"',
          "font-family": "FontAwesome",
          display: "inline-block",
          "padding-left": "5px",
        },
      },
    }),
  ],

  transformers: [transformerVariantGroup(), transformerDirectives()],

  theme: {
    fontFamily: {
      noto: "Noto Sans, sans-serif",
      jetbrains: "JetBrains Mono, monospace",
      righteous: "Righteous, cursive",
    },
  },
});
