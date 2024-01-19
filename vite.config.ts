import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), rawFonts(['.woff'])],
	ssr: {
		noExternal: ['three']
	},
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	}
});

function rawFonts(ext: string[]) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(_code: string, id: string) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}
