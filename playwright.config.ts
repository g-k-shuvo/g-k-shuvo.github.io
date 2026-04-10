import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		baseURL: 'https://g-k-shuvo.github.io',
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
	},
	projects: [
		// Desktop
		{
			name: 'desktop-chrome',
			use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
		},
		{
			name: 'desktop-firefox',
			use: { ...devices['Desktop Firefox'], viewport: { width: 1440, height: 900 } },
		},
		{
			name: 'desktop-webkit',
			use: { ...devices['Desktop Safari'] },
		},
		// Tablet
		{
			name: 'tablet-landscape',
			use: { viewport: { width: 1024, height: 768 } },
		},
		{
			name: 'tablet-portrait',
			use: { viewport: { width: 768, height: 1024 } },
		},
		// Mobile
		{
			name: 'mobile-iphone-se',
			use: { ...devices['iPhone SE'] },
		},
		{
			name: 'mobile-iphone-14',
			use: { ...devices['iPhone 14'] },
		},
		{
			name: 'mobile-android',
			use: { ...devices['Pixel 7'] },
		},
	],
});
