import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    browserName: 'chromium',
    launchOptions: process.env.PLAYWRIGHT_EXECUTABLE_PATH ? {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--no-zygote'],
    } : {},
  },
  webServer: { command: 'npm run preview', url: 'http://127.0.0.1:3000', reuseExistingServer: !process.env.CI },
});
