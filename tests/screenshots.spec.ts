import { test } from '@playwright/test';

// Wait for the site's loader to finish
async function waitForSiteLoad(page: any) {
	await page.waitForLoadState('networkidle');
	await page.waitForTimeout(3000);
}

test.describe('Full Page Screenshots', () => {
	test('capture full page', async ({ page }, testInfo) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		await page.screenshot({
			path: `test-results/screenshots/full-page-${testInfo.project.name}.png`,
			fullPage: true,
		});
	});
});

test.describe('Section Screenshots', () => {
	const sections = [
		{ name: 'home', selector: '#content-container:first-of-type' },
		{ name: 'about', selector: '#content-container.about' },
		{ name: 'work', selector: '#content-container.work-click-area' },
		{ name: 'experience', selector: '#content-container.experience' },
		{ name: 'footer', selector: '.footer-wrapper' },
	];

	for (const section of sections) {
		test(`capture ${section.name} section`, async ({ page }, testInfo) => {
			await page.goto('/');
			await waitForSiteLoad(page);

			const element = page.locator(section.selector);
			if (await element.isVisible()) {
				await element.screenshot({
					path: `test-results/screenshots/${section.name}-${testInfo.project.name}.png`,
				});
			}
		});
	}
});
