import { expect, test } from "@playwright/test";

test("Multi Select Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Selectt multiple options from multi select dropdown
  //await page.selectOption("#colors", ["Blue", "Red", "Yellow"]); --Array

  //Assertions
  //1) Check number of options
  //const options = await page.locator("#colors option");
  //await expect(options).toHaveCount(7);

  //2)Check number of options in dropdown using JS array
  const options = await page.$$("#colors option");
  // console.log("Number of options:", options.length);
  // await expect(options.length).toBe(7);

  //3) check presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  //await expect(content.includes('Pink)).toBeTruthy();
  await expect(content.includes("Pink")).toBeFalsy();

  await page.waitForTimeout(5000);
});
