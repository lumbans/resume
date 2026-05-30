/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './index.html'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				primary: { DEFAULT: '#2B5D3A' },
				secondary: { DEFAULT: '#4A90E2' },
				accent: { DEFAULT: '#F5A623' },
			},
		},
	},
	plugins: [],
}
