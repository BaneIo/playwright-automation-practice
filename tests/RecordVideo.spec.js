import { expect, test } from "@playwright/test";

// only-on-failure
// retain-on-failure

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");

  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("#logout")).toBeVisible();
});
