import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  name: "Quickfire",
  short_name: "Quickfire",
  description:
    "A rapid-access information panel built for firefighters, by firefighters",
  theme_color: "#15191f",
  background_color: "#15191f",
  display: "standalone",
  orientation: "any",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
