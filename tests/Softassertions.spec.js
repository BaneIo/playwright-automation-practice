import { expect, test } from "@playwright/test";

test("Soft assertions", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  //Hard assertion
  /*
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://demoblaze.com/index.html");
  await expect(page.locator(".navbar-brand")).toBeVisible();
  */

  //Soft assertion
  await expect.soft(page).toHaveTitle("STORE123");
  await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});
