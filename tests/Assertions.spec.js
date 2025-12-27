import { test, expect } from "@playwright/test";

test("AssertionsTest", async ({ page }) => {
  //open app url
  await page.goto("https://demo.nopcommerce.com/register");
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
  await expect(page).toHaveTitle("nopCommerce demo store. Register");
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  //4)expect(locator).toBeEnabled() control is enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  // radio button
  const maleRadioButton = await page.locator("#gender-male");
  await maleRadioButton.click(); //select radio button
  await expect(maleRadioButton).toBeChecked();

  // checkbox
  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  // element has attribute
  const registerButton = await page.locator("#register-button");
  await expect(registerButton).toHaveAttribute("type", "submit");

  //7). Element matches text
  await expect(await page.locator(".page-title h1")).toHaveText("Register"); //exact match

  //8). Element contains text
  await expect(await page.locator(".page-title h1")).toContainText("Reg"); //partial text

  //9). input has a value

  const emailInput = await page.locator("#Email");
  emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  //10). to have count
  //const options = await page.locator("Here specify locator, Xpath or CSS");
  //await expect(options).toHaveCount(13);
});
