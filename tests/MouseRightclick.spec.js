import { expect, test } from "@playwright/test";

test("Mouse Right Click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  //const button = await page.locator('span:has-text("right click me")');
  const button = await page.locator("span.context-menu-one.btn.btn-neutral");

  //right click action
  await button.click({ button: "right" });

  await page.waitForTimeout(5000);
});
