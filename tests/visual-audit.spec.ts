import { test, expect, type Page } from '@playwright/test';

// Wait for the site's loader to finish and content to appear
async function waitForSiteLoad(page: Page) {
	await page.waitForLoadState('networkidle');
	// Wait for loader to disappear or content to be visible
	await page.waitForTimeout(3000);
}

// ─── A. Page Load & Core Functionality ───────────────────────────

test.describe('Page Load & Core Functionality', () => {
	test('page loads without JS errors', async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', (err) => errors.push(err.message));

		await page.goto('/');
		await waitForSiteLoad(page);

		expect(errors).toEqual([]);
	});

	test('all sections render', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		// Home section
		const home = page.locator('#content-container').first();
		await expect(home).toBeVisible();

		// About section
		const about = page.locator('#content-container.about');
		await expect(about).toBeAttached();

		// Work section
		const work = page.locator('#content-container.work-click-area');
		await expect(work).toBeAttached();

		// Experience section
		const experience = page.locator('#content-container.experience');
		await expect(experience).toBeAttached();

		// Footer
		const footer = page.locator('.footer-wrapper');
		await expect(footer).toBeAttached();
	});

	test('favicon is present', async ({ page }) => {
		await page.goto('/');
		const favicon = page.locator('link[rel="icon"]');
		await expect(favicon.first()).toHaveAttribute('href', /favicon/);
	});
});

// ─── B. Responsiveness ───────────────────────────────────────────

test.describe('Home Section', () => {
	test('no horizontal overflow', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const overflow = await page.evaluate(() => {
			return document.documentElement.scrollWidth > document.documentElement.clientWidth;
		});
		expect(overflow).toBe(false);
	});

	test('home title is visible and not clipped', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const title = page.locator('#content-container .title').first();
		if (await title.isVisible()) {
			const box = await title.boundingBox();
			expect(box).not.toBeNull();
			if (box) {
				expect(box.width).toBeGreaterThan(0);
				expect(box.x).toBeGreaterThanOrEqual(-5); // not clipped off-screen left
			}
		}
	});

	test('home background image loads', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const bgImages = page.locator('#content-container img').first();
		if (await bgImages.count() > 0) {
			const naturalWidth = await bgImages.evaluate((img: HTMLImageElement) => img.naturalWidth);
			expect(naturalWidth).toBeGreaterThan(0);
		}
	});
});

test.describe('About Section', () => {
	test('about content renders', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const about = page.locator('#content-container.about');
		await expect(about).toBeAttached();
	});

	test('profile image visibility matches viewport', async ({ page, viewport }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const profileImg = page.locator('#content-container.about .profile-image');
		if (viewport && viewport.width <= 950) {
			// Should be hidden on mobile/tablet
			await expect(profileImg).toBeHidden();
		} else {
			await expect(profileImg).toBeVisible();
		}
	});

	test('social links are visible', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const socialWrapper = page.locator('.social-button-wrapper');
		if (await socialWrapper.isVisible()) {
			const links = socialWrapper.locator('a');
			const count = await links.count();
			expect(count).toBeGreaterThanOrEqual(3); // Email, GitHub, LinkedIn
		}
	});

	test('tech expertise section renders', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const techList = page.locator('.horizontal-flex .list').first();
		await expect(techList).toBeAttached();
	});

	test('education & certifications section renders', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const lists = page.locator('.horizontal-flex .list');
		const count = await lists.count();
		expect(count).toBeGreaterThanOrEqual(2); // tech expertise + certifications
	});
});

test.describe('Work Section', () => {
	test('work items are present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const workItems = page.locator('.work-list li');
		await expect(workItems).toHaveCount(6);
	});

	test('work cover images load', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const images = page.locator('.work-list .img-wrapper img');
		const count = await images.count();

		for (let i = 0; i < count; i++) {
			const img = images.nth(i);
			const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
			const src = await img.getAttribute('src');
			expect(naturalWidth, `Image ${i} (${src}) should load`).toBeGreaterThan(0);
		}
	});

	test('work item titles are visible', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const titles = page.locator('.work-list .item-title');
		const count = await titles.count();
		expect(count).toBe(6);
	});
});

test.describe('Experience Section', () => {
	test('experience title is not clipped', async ({ page, viewport }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const title = page.locator('#content-container.experience .title');
		if (await title.isVisible()) {
			const box = await title.boundingBox();
			expect(box).not.toBeNull();
			if (box && viewport) {
				// Title should not extend beyond viewport
				expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 10);
			}
		}
	});

	test('project cards render', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const cards = page.locator('.project-grid .project-card');
		const count = await cards.count();
		expect(count).toBe(7); // 7 Techjays projects
	});

	test('project grid is single column on mobile', async ({ page, viewport }) => {
		if (!viewport || viewport.width > 950) return;

		await page.goto('/');
		await waitForSiteLoad(page);

		const grid = page.locator('.project-grid');
		if (await grid.isVisible()) {
			const gridStyle = await grid.evaluate((el) => {
				return window.getComputedStyle(el).gridTemplateColumns;
			});
			// Single column should not contain multiple values
			const columns = gridStyle.split(' ').filter((s) => s.trim().length > 0);
			expect(columns.length).toBe(1);
		}
	});

	test('tech tags wrap properly (no overflow)', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const tagContainers = page.locator('.project-card .tech-tags');
		const count = await tagContainers.count();

		for (let i = 0; i < count; i++) {
			const container = tagContainers.nth(i);
			if (await container.isVisible()) {
				const overflow = await container.evaluate((el) => {
					return el.scrollWidth > el.clientWidth + 5;
				});
				expect(overflow, `Tech tags container ${i} should not overflow`).toBe(false);
			}
		}
	});

	test('company header is readable', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const companyName = page.locator('.company-name');
		if (await companyName.isVisible()) {
			const fontSize = await companyName.evaluate((el) => {
				return parseFloat(window.getComputedStyle(el).fontSize);
			});
			expect(fontSize).toBeGreaterThanOrEqual(16);
		}
	});
});

test.describe('Footer', () => {
	test('footer renders with status text', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const footer = page.locator('.footer-wrapper');
		await expect(footer).toBeAttached();

		const statusText = page.locator('.footer-wrapper .status-wrapper .large-text').first();
		if (await statusText.isVisible()) {
			const text = await statusText.textContent();
			expect(text).toContain('freelance');
		}
	});

	test('email link is present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const emailLink = page.locator('.footer-wrapper a[href^="mailto:"]');
		await expect(emailLink).toBeAttached();
		await expect(emailLink).toHaveAttribute('href', 'mailto:gkshuvo24@gmail.com');
	});

	test('copyright year shows', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const year = page.locator('.footer-wrapper .year');
		if (await year.isVisible()) {
			const text = await year.textContent();
			expect(text).toContain(new Date().getFullYear().toString());
		}
	});

	test('signature SVG visibility matches viewport', async ({ page, viewport }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const signature = page.locator('.footer-wrapper .flex-wrapper.decor');
		if (viewport && viewport.width <= 950) {
			await expect(signature).toBeHidden();
		} else {
			await expect(signature).toBeVisible();
		}
	});
});

test.describe('Navigation', () => {
	test('nav is present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const nav = page.locator('nav, .nav-wrapper, [class*="nav"]').first();
		await expect(nav).toBeAttached();
	});
});

// ─── C. Typography Checks ────────────────────────────────────────

test.describe('Typography', () => {
	test('no text below 10px font size', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const tinyTexts = await page.evaluate(() => {
			const results: { tag: string; text: string; fontSize: string; selector: string }[] = [];
			const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, div');

			textElements.forEach((el) => {
				const style = window.getComputedStyle(el);
				const fontSize = parseFloat(style.fontSize);
				const text = (el as HTMLElement).innerText?.trim().substring(0, 50);

				if (fontSize < 10 && text && text.length > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
					results.push({
						tag: el.tagName,
						text,
						fontSize: style.fontSize,
						selector: el.className || el.id || el.tagName,
					});
				}
			});
			return results;
		});

		if (tinyTexts.length > 0) {
			console.log('Elements with font-size < 10px:', JSON.stringify(tinyTexts, null, 2));
		}
		expect(tinyTexts.length, `Found ${tinyTexts.length} elements with font < 10px`).toBe(0);
	});

	test('no horizontal scrollbar (content overflow)', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const hasHorizontalScroll = await page.evaluate(() => {
			return document.documentElement.scrollWidth > document.documentElement.clientWidth;
		});

		expect(hasHorizontalScroll).toBe(false);
	});
});

// ─── D. Image & Asset Checks ─────────────────────────────────────

test.describe('Images & Assets', () => {
	test('no broken images on page', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const brokenImages = await page.evaluate(() => {
			const results: { src: string; alt: string }[] = [];
			document.querySelectorAll('img').forEach((img) => {
				if (img.naturalWidth === 0 && img.src && !img.src.startsWith('data:')) {
					results.push({ src: img.src, alt: img.alt || '(no alt)' });
				}
			});
			return results;
		});

		if (brokenImages.length > 0) {
			console.log('Broken images:', JSON.stringify(brokenImages, null, 2));
		}
		expect(brokenImages.length, `Found ${brokenImages.length} broken images`).toBe(0);
	});

	test('all images have alt text', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const missingAlt = await page.evaluate(() => {
			const results: string[] = [];
			document.querySelectorAll('img').forEach((img) => {
				if (!img.alt || img.alt.trim() === '') {
					results.push(img.src);
				}
			});
			return results;
		});

		if (missingAlt.length > 0) {
			console.log('Images missing alt text:', missingAlt);
		}
		expect(missingAlt.length, `Found ${missingAlt.length} images without alt text`).toBe(0);
	});

	test('SVG tech icons load', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const svgIcons = page.locator('img[src*="svg-icons"]');
		const count = await svgIcons.count();
		expect(count).toBeGreaterThanOrEqual(10); // We have 12+ tech icons

		for (let i = 0; i < count; i++) {
			const icon = svgIcons.nth(i);
			const naturalWidth = await icon.evaluate((el: HTMLImageElement) => el.naturalWidth);
			const src = await icon.getAttribute('src');
			expect(naturalWidth, `SVG icon ${src} should load`).toBeGreaterThan(0);
		}
	});
});

// ─── E. Link Validation ──────────────────────────────────────────

test.describe('Links', () => {
	test('email mailto link is present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const mailto = page.locator('a[href^="mailto:"]');
		const count = await mailto.count();
		expect(count).toBeGreaterThanOrEqual(1);
	});

	test('GitHub profile link is present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const github = page.locator('a[href*="github.com/g-k-shuvo"]');
		const count = await github.count();
		expect(count).toBeGreaterThanOrEqual(1);
	});

	test('LinkedIn link is present', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const linkedin = page.locator('a[href*="linkedin.com"]');
		const count = await linkedin.count();
		expect(count).toBeGreaterThanOrEqual(1);
	});

	test('no placeholder links (href="#")', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const placeholderLinks = page.locator('a[href="#"]');
		const count = await placeholderLinks.count();

		if (count > 0) {
			const hrefs = await placeholderLinks.evaluateAll((els) =>
				els.map((el) => ({ text: el.textContent?.trim(), href: el.getAttribute('href') }))
			);
			console.log('Placeholder links found:', JSON.stringify(hrefs, null, 2));
		}
		expect(count, `Found ${count} placeholder links with href="#"`).toBe(0);
	});
});

// ─── F. Accessibility Basics ─────────────────────────────────────

test.describe('Accessibility', () => {
	test('page has a title', async ({ page }) => {
		await page.goto('/');
		const title = await page.title();
		expect(title).toBeTruthy();
		expect(title.length).toBeGreaterThan(0);
	});

	test('page has lang attribute', async ({ page }) => {
		await page.goto('/');
		const lang = await page.locator('html').getAttribute('lang');
		expect(lang).toBeTruthy();
	});

	test('no viewport horizontal overflow on any section', async ({ page }) => {
		await page.goto('/');
		await waitForSiteLoad(page);

		const overflowElements = await page.evaluate(() => {
			const results: { tag: string; class: string; scrollW: number; clientW: number }[] = [];
			const viewportWidth = document.documentElement.clientWidth;

			document.querySelectorAll('*').forEach((el) => {
				const rect = (el as HTMLElement).getBoundingClientRect();
				if (rect.right > viewportWidth + 5 && rect.width > 0) {
					const classes = el.className?.toString().substring(0, 50) || '';
					// Ignore elements that are intentionally off-screen (sliders, etc.)
					if (!classes.includes('work-list') && !classes.includes('cursor')) {
						results.push({
							tag: el.tagName,
							class: classes,
							scrollW: Math.round(rect.right),
							clientW: viewportWidth,
						});
					}
				}
			});
			return results.slice(0, 10); // limit output
		});

		if (overflowElements.length > 0) {
			console.log('Elements extending beyond viewport:', JSON.stringify(overflowElements, null, 2));
		}
		// Warning only — some overflow may be intentional (work slider)
		expect(overflowElements.length).toBeLessThanOrEqual(5);
	});
});
