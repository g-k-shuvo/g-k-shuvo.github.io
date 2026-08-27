import { defineConfig, devices } from '@playwright/test';

/**
 * Capture harness for the design inspection round. Not a test suite —
 * it renders the built site at the shipped device widths and writes
 * full-page captures into .impeccable/review/.
 */
export default defineConfig({
	testDir: './tests',
	fullyParallel: false,
	workers: 1,
	reporter: 'list',
	use: {
		baseURL: 'http://127.0.0.1:4321',
		colorScheme: 'dark'
	},
	projects: [
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } }
		},
		{
			name: 'mobile',
			use: { ...devices['Desktop Chrome'], viewport: { width: 390, height: 844 } }
		}
	],
	webServer: {
		command: 'npm run preview -- --port 4321 --host 127.0.0.1',
		url: 'http://127.0.0.1:4321',
		reuseExistingServer: true,
		timeout: 120_000
	}
});
