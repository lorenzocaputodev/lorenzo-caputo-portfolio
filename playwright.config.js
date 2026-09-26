import { defineConfig, devices } from '@playwright/test'

const PORT = 4173

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}/`,
    // Optional: reuse a preinstalled Chromium instead of `npx playwright install`.
    launchOptions: process.env.PW_CHROMIUM_PATH
      ? { executablePath: process.env.PW_CHROMIUM_PATH }
      : {},
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], locale: 'it-IT' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], locale: 'it-IT' } },
  ],
  webServer: {
    // In CI `npm run check` has already produced dist/, so only the preview server is started.
    command: `${process.env.CI ? '' : 'npm run build && '}npm run preview -- --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: !process.env.CI,
  },
})
