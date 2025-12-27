import { expect, test } from "@playwright/test";

test("Mouse Double Click", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("//button[normalize-space()='Copy Text']").dblclick();
  const field2 = page.locator("#field2");

  await expect(field2).toHaveValue("Hello World!");
  await await page.waitForTimeout(5000);
});
