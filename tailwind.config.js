const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter", sans-serif', ...defaultTheme.fontFamily.sans],
				mono: ['"Fira Code", mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
};
