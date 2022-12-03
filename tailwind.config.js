/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				theme: '#FFB400',
				heading: {
					light: '#2B2B2B',
					dark: '#fff',
				},
				content: {
					light: '#3a3737',
					dark: '#f9f9f9',
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			container: {
				center: true,
			},
			keyframes: {
				wiggle: {
					'0%': { transform: 'rotate(-90deg)' },
					'100%': { transform: 'rotate(0)' },
				},
			},
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
	darkMode: 'class',
};
