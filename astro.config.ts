import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa";

import { manifest, seoConfig } from "./utils/seoConfig";

import tunnel from "astro-tunnel";

export default defineConfig({
    site: 'https://quickfire.lachlanharris.dev',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), tunnel()],
  vite: {
    plugins: [VitePWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
        navigateFallback: null
      }
    })]
  }
});
