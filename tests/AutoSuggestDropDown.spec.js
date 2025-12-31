import { test, expect } from "@playwright/test";

test("AutoSuggestDropDown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Delhi");

  await page.waitForSelector(
    "//li[contains(@class, 'sc-iwsKbi')]/div/text()[1]"
  );

  const fromCityOptions = await page.$$(
    "//li[contains(@class, 'sc-iwsKbi')]/div/text()[1]"
  );

  for (const option of fromCityOptions) {
    const value = await option.textContent();
    if (value && value.includes("Anand Vihar")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
