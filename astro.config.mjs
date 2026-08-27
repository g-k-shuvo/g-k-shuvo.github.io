import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://g-k-shuvo.github.io',
	output: 'static',
	compressHTML: true,
	build: {
		// Emit assets under a stable directory for the Pages artifact.
		assets: 'assets'
	}
});
