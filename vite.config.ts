import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), rawFonts(['.woff']), base64()],
	server: {
		fs: {
			allow: ['./']
		}
	},
	define: {
		'import.meta.env.VERCEL_URL': JSON.stringify(process.env.VERCEL_URL)
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

function base64() {
	return {
		name: 'vite-plugin-base64-loader',
		transform(_code: string, id: string) {
			const [path, query] = id.split('?');

			if (query !== 'base64') {
				return null;
			}

			const base64 = fs.readFileSync(path, { encoding: 'base64' });
			return { code: `export default ${JSON.stringify(base64)}`, map: null };
		}
	};
}
