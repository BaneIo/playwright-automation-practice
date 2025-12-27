import { test, expect } from "@playwright/test";

test("Drag And Drop", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/drag-and-drop");

  const source = await page.getByText("A", { exact: true });

  const target = await page.getByText("B", { exact: true });

  //Approach 1
  /*
  await source.hover();
  await page.mouse.down();

  await target.hover();
  await page.mouse.up();
*/

  //Approach 2

  await source.dragTo(target);
  await await page.waitForTimeout(5000);
});
