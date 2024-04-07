import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import pageReload from "vite-plugin-page-reload";
import cleanup from "@by-association-only/vite-plugin-shopify-clean";
import cleanPlugin from "vite-plugin-clean";

export default defineConfig({
  plugins: [shopify(), pageReload("/tmp/theme.update")],
  build: {
    emptyOutDir: false,
  },
});
