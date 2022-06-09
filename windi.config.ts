import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        righteous: ["Righteous", "cursive"],
      },
    },
  },
  extract: {
    include: ["src/**/*.{astro,md,js,jsx,ts,tsx}"],
  },
  plugins: [require("windicss/plugin/forms")],
});
