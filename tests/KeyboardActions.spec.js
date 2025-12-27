import { test, expect } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  // await page.locator('[name="text1"]').type("welcome to automation");
  // await page.locator('[name="text1"]').fill("welcome to automation");
  await page.type('[name="text1"]', "welcome to automation");
  // await page.locator("textarea").nth(0).fill("welcome to automation");

  //Ctrl + A
  await page.keyboard.press("Control+A");
  //Ctrl + C
  await page.keyboard.press("Control+C");
  //Tab key
  //await page.press("Tab")
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //Ctrl + V
  await page.keyboard.press("Control+V");
  await expect(page.locator('[name="text2"]')).toHaveValue(
    "welcome to automation"
  );

  await page.waitForTimeout(5000);
});
