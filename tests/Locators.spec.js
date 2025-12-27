//const { expect, test } = require("@playwright/test");
import { expect, test } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  // click on login button     -property
  //await page.locator("id = login2").click();
  await page.click("id=login2");
  // provid username -css
  //await page.locator("#loginusername").fill("banelo");
  await page.fill("#loginusername", "pavanol");
  //await page.type("#loginusername");
  // provide password
  await page.fill("input[id='loginpassword']", "test@123");
  // click on login button
  await page.click("//button[normalize-space()='Log in']");
  //verifying logout link presence
  const logoutlink = await page.locator(
    "(//a[normalize-space()='Log out'])[1]"
  );
  await expect(logoutlink).toBeVisible();
  await page.close();
});
