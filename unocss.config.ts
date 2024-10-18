import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    colors: {
      // https://unocss.dev/config/theme
      primary: "#000000",
    },
  },
});
