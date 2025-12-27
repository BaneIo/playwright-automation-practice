import { test, expect } from "@playwright/test";
// Problem with locator, code does not work.
test("Hidden options dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[name='username']").fill("Admin");
  await page.locator("[name='password']").fill("admin123");
  await page.locator("[type='submit']").click();

  await page.locator("//span[normalize-space()='PIM']").click;

  //click on drop down
  await page
    .locator(
      "//div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[6]//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']"
    )
    .click();

  //waiting for options

  await page.waitForTimeout(3000);

  const options = await page.$$("//div[@role='listbox']//span");

  for (option of options) {
    const jobtitle = await option.textContent();
    // console.log(jobtitle);
    if (jobtitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
