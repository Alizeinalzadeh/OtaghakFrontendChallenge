import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			// I didn't group colors, but it's better to have color variants for every color.
			colors: {
				border: '#D6D6DE',
				text: '#48484E',
				placeholder: '#64646E',
				primary: '#F03E58',
				transparent: 'transparent',
			},
		},
	},
	plugins: [],
};
export default config;
