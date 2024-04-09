import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import pageReload from "vite-plugin-page-reload";

export default defineConfig({
  plugins: [shopify(), pageReload("/tmp/theme.update")],
  build: {
    emptyOutDir: false,
  },
});
