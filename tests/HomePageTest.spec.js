import { test, expect } from "@playwright/test";
// This  test should fail!
test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

  expect(page).toHaveTitle("STORE-FAIL");
  const pageURL = page.url();
  console.log("Page url is:", pageURL);
  await expect(page).toHaveURL("https://demoblaze.com/");
  await page.close();
});
