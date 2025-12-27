// Reference : https://playwright.dev/docs/input

import { expect, test } from "@playwright/test";

test("Single File", async ({ page }) => {
  await page.goto(
    "https://testinzo.com/practice-playground/?utm_source=chatgpt.com"
  );

  await page.waitForSelector('input[type="file"]');

  await page
    .locator('input[type="file"]')
    .nth(0)
    .setInputFiles("tests/uploadFiles/testfile1.pdf");
  await page.waitForTimeout(5000);
});

test.only("Multiple Files", async ({ page }) => {
  await page.goto("https://www.htmlelements.com/demos/fileupload/multiple/");

  const frame = page.frameLocator('[src*="index.htm"]');
  await frame
    .locator('input[type="file"]')
    .setInputFiles([
      "tests/uploadFiles/testfile1.pdf",
      "tests/uploadFiles/testfile2.pdf",
    ]);
});
