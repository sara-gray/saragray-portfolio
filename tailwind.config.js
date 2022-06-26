module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			link: 'chain',
			roman: 'upper-roman',
		},
		screens: {
			'xs': "540px",
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				'primary-pink': '#ac617c',
				'primary-kharki': '#c69c6d',
				'primary-plum': '#511f5a',
				footer: '#222',
			},
			animation: {
				tilt: 'tilt 10s infinite linear'
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": {
						transform: "rotate(0deg)",
					},
					"25%": {
						transform: "rotate(1deg)",
					},
					"75%": {
						transform: "rotate(-1deg)",
					},

				}
			}
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
