import { expect, test } from "@playwright/test";

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://practice-automation.com/hover/");

  const mousoverme = await page.getByRole("heading", { name: "Mouse over me" });
  // const macbook = await page.locator('//a[normalize-space()="Mac (1)"]');

  //mouse hover
  await mousoverme.hover();
  //await macbook.hover();
  await page.waitForTimeout(5000);
});
