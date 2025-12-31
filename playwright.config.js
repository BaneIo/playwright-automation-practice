import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from "dotenv";
// import path from "path";
// dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

/* ✅ DODATO – čita browser iz GitHub Actions */
const selectedBrowser = process.env.BROWSER || "chromium";

export default defineConfig({
  testDir: "./tests",

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  // retries: 1,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter configuration */
  reporter: [
    ["list"],
    ["github"], // ✅ DODATO – GitHub Actions annotations
    // ["html"],
    // ["junit", { outputFile: "results.xml" }],
    // ["json", { outputFile: "results.json" }],
    ["allure-playwright", { outputFolder: "allure-results" }],
  ],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: "http://localhost:3000",
    /* Collect trace when retrying the failed test. */
    // trace: "retain-on-failure",
    /* Take screenshot only on failure */
    // screenshot: "only-on-failure",
    /* Record video */
    // video: "on",
  },

  // timeout: 1000,

  /* Configure projects for major browsers */
  projects:
    selectedBrowser === "all"
      ? [
          {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
          },
          {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
          },
          {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
          },
        ]
      : [
          {
            name: selectedBrowser,
            use:
              selectedBrowser === "chromium"
                ? { ...devices["Desktop Chrome"] }
                : selectedBrowser === "firefox"
                ? { ...devices["Desktop Firefox"] }
                : { ...devices["Desktop Safari"] },
          },
        ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: "npm run start",
  //   url: "http://localhost:3000",
  //   reuseExistingServer: !process.env.CI,
  // },
});
