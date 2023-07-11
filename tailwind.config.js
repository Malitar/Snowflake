/**
 * Tailwind laed automatisch den core, dieses File dient dazu, den
 * Core zu erweitern
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./public/**/*.{html,js}" /** important that you get your files correctly! */
	],
	/**
	 * theme dient dazu Erweiterungen, wie etwa spezielle Farben dem 'core' hinzu zufügen
	 * just follow 'tailwind-default.config.js' syntax
	 */
	theme: {
		extend: {
			colors: {
				primary: '#FF6363',
				secondary: {
					100: '#E2E2D5',
					200: '#888883',
				}
			},
			fontFamily: {
				gothic: [
					'Gothic A1'
				]
			},
			screens: {
				'4k': '3840px' ,
			},
		},
	},
	plugins: [],
}

