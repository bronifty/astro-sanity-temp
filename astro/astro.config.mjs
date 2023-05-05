import { defineConfig } from "astro/config";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: "**/node_modules/**",
      },
    },
  },
  integrations: [
    sanity({
      projectId: "bpy0mxas",
      dataset: "production",
      useCdn: true,
      apiVersion: "2021-03-25",
    }),
  ],
});
