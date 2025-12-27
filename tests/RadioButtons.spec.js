import { expect, test } from "@playwright/test";

test("Handle radio button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Radio Button

  await page.locator("//input[@id='male']").check(); //male
  // await page.check("//input[@id='male']"); //it will select male radio button
  await expect(await page.locator("//input[@id='male']")).toBeChecked();
  await expect(
    await page.locator("//input[@id='male']").isChecked()
  ).toBeTruthy();

  await expect(
    await page.locator("//input[@id='female']").isChecked()
  ).toBeFalsy();

  await page.waitForTimeout(5000); //pausing code
});
