import { test, expect } from "@playwright/test";

test("Bootstrap dropdown", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/tests/index.html");

  await page.locator(".dropdown").click();

  //1
  // const options = await page.locator("ul>li label input");
  // await expect(options).toHaveCount(11);

  //2
  // const options = await page.$$("ul>li label input");
  //await expect(options.length).toBe(11);

  //3 select multiple options from the dropdown
  const options = await page.$$("ul>li label");
  for (let option of options) {
    const value = await option.textContent();
    //console.log("Value is:", value);
    if (value.includes("HTML") || value.includes("CSS")) {
      await option.click();
    }
  }

  await page.waitForTimeout(5000);
});
