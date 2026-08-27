import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const OUT = '.impeccable/review';

test('capture', async ({ page }, testInfo) => {
	mkdirSync(OUT, { recursive: true });

	await page.goto('/', { waitUntil: 'networkidle' });

	// Fonts settled and the status dot's breathe animation parked, so a capture
	// measures layout rather than animation timing.
	await page.evaluate(() => document.fonts.ready);
	await page.addStyleTag({
		content: '*,*::before,*::after{animation:none !important;transition:none !important}'
	});
	await page.waitForTimeout(400);

	// Force every lazy image to load, then walk the page so nothing is mid-decode.
	// A half-loaded capture is not evidence.
	await page.evaluate(() => {
		for (const img of Array.from(document.images)) {
			img.loading = 'eager';
			img.removeAttribute('loading');
		}
	});
	await page.evaluate(async () => {
		const step = window.innerHeight;
		for (let y = 0; y < document.body.scrollHeight; y += step) {
			window.scrollTo(0, y);
			await new Promise((res) => setTimeout(res, 60));
		}
		window.scrollTo(0, 0);
	});
	await page.waitForLoadState('networkidle');
	await page.waitForFunction(() => Array.from(document.images).every((i) => i.complete), null, {
		timeout: 15_000
	});
	await page.waitForTimeout(250);

	await page.screenshot({
		path: `${OUT}/${testInfo.project.name}.png`,
		fullPage: true,
		animations: 'disabled'
	});

	// Nothing may scroll the page sideways at any shipped width.
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	expect(overflow, 'horizontal overflow in px').toBeLessThanOrEqual(0);
});
