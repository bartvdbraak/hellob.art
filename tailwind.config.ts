import { join } from 'path';
import type { Config } from 'tailwindcss';
import { theme } from './theme';
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'logo-blue-start': {
					light: '#314755',
					DEFAULT: '#314755',
					dark: '#7196AD'
				},
				'logo-blue-stop': {
					light: '#26a0da',
					DEFAULT: '#26a0da',
					dark: '#7CC6E9'
				}
			},
			dark: {
				// <-- Add this section for dark mode classes
				'logo-text-gradient-dark': {
					'@apply': 'from-logo-blue-start-dark to-logo-blue-stop-dark'
				}
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [theme]
			}
		})
	]
} satisfies Config;

export default config;
