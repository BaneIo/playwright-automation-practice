import { test, expect } from "@playwright/test";

test("Handle dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Multiple ways to select option from the dropdown
  // await page.locator("#country").selectOption({ label: "Germany" }); //label/ visible text
  //await page.locator("#country").selectOption("Germany"); //visible text
  //await page.locator("#country").selectOption({ value: "uk" }); //passing value
  //await page.locator("#country").selectOption({ index: 1 }); //index, number on list
  //await page.selectOption("#country", "Germany"); //by text, calling selectOption on a page

  //Assertions
  //1 chcek number of options in dropdown - Approach 1
  //const options = await page.locator("#country option");
  //await expect(options).toHaveCount(10);

  //2) chcek number of options in dropdown - Approach 2
  // const options = await page.$$("#country option");

  //console.log("Number of options:", options.length);
  //await expect(options.length).toBe(10);

  //3) check presence of value in the dropdown
  //const content = await page.locator("#country").textContent();
  //await expect(content.includes("Germany")).toBeTruthy();

  //4) checking presence of value in the dropdown usin looping statement
  /* const options = await page.$$("#country option");
  let status = false;

  for (const option of options) {
    //console.log(await option.textContent());
    let value = await await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();
  */

  //5) select option from dropdown using loop
  const options = await page.$$("#country option");
  for (const option of options) {
    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }

  await page.waitForTimeout(5000);
});
