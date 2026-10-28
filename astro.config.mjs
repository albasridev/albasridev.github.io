import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://albasridev.github.io",
  base: "/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
