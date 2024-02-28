/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: "#f5f5f5",
				secondary: "#0a0a0a",
				secondary2: "#0c91a6",
				primaryDark: "#0a0a0a",
				secondaryDark: "#f5f5f5",
				secondary2Dark: "#22d3ee",
			},
		},
	},
	plugins: [],
}
