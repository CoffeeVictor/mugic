/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-rubik)'],
			},
			gridTemplateColumns: {
				'auto-fill-18': 'repeat(auto-fill, 18rem)',
			},
		},
	},
	plugins: [require('daisyui')],
};
