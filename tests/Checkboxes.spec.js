import { test, expect } from "@playwright/test";
import { only } from "node:test";

test("Handle checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Single chceckbox
  await page.locator("//input[@id='monday' and @type='checkbox']").check();
  //await page.check('//input[@id='monday'and @type='checkbox']');

  expect(
    await page.locator("//input[@id='monday' and @type='checkbox']")
  ).toBeChecked();

  expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()
  ).toBeFalsy(); // This Syntax is important !

  //Multiple checkboxes - Array
  const checkboxLocators = [
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='saturday' and @type='checkbox']",
  ];

  for (const locator of checkboxLocators) {
    // select multiple checkbox
    await page.locator(locator).check();
  }
  await page.waitForTimeout(5000);

  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }
});
