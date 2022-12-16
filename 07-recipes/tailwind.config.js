/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/svgs/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				main: '#0284c7',
			},
		},
		fontFamily: {
			'nunito': ['Nunito'],
		},
	},
	plugins: [],
};
