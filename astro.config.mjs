import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://g-k-shuvo.github.io',
	output: 'static',
	compressHTML: true,
	build: {
		// Emit assets under a stable directory for the Pages artifact.
		assets: 'assets',
		// The whole stylesheet is a few KB gzipped. Inlining it removes a
		// render-blocking request and, more importantly, lets the font URLs be
		// discovered during the initial HTML parse instead of after a round trip.
		inlineStylesheets: 'always'
	}
});
