import type { ManifestOptions } from "vite-plugin-pwa"

export const seoConfig = {
	baseURL: "https://quickfire.lachlanharris.dev",
	description: "Quickfire is a rapid-access information panel engineered for firefighters, by firefighters",
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630",
		alt: "Quickfire - Emergency field information",
		width: 1200,
		height: 630
	},
	siteName: "Quickfire",
	twitter: {
		card: "summary_large_image"
	}
}

export const manifest: Partial<ManifestOptions> = {
	name: "Quickfire",
	short_name: "Quickfire",
	description: "Quickfire is a rapid-access information panel engineered for firefighters, by firefighters",
	theme_color: "#15191f",
	background_color: "#15191f",
	display: "standalone",
	orientation: "any",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
