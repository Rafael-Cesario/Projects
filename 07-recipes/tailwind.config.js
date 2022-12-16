/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/svgs/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				main: '#fbbf24',
			},
		},
		fontFamily: {
			'nunito': ['Nunito'],
		},
	},
	plugins: [],
};
