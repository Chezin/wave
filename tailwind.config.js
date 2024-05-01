/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Condensed", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				wave: {
					primary: "#0F0E0E",
					secondary: "#8DAA9D",
					accent: "#522B47",
					error: "7B0828",
					"base-100": "#FBF5F3",
				},
			},
		],
	},
};
