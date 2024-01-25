/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"nav-bg": "#85A0EC",
			},
			boxShadow: {
				"hover-inset": "inset 0 2px 2px 0 rgba(0, 0, 0, .3)",
			},
		},
	},
	plugins: [],
};
