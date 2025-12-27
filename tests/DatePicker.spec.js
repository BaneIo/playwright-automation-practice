import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.fill("#datepicker", "11/15/2025");
  //date picker
  const year = "2022";
  const month = "March";
  const date = "25";
  await page.click("#datepicker"); // opens calendar
  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    if (currentYear == year && currentMonth == month) {
      break;
    }
    //await page.getByText("Next").click(); //Next
    // await page.locator('[title="Previous"]').click();
    await page.getByText("Prev").click(); //Previous
  }

  const dates = await page.$$("//a[@class='ui-state-default']");
  //date selction using loop
  /*for (const dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }
*/

  //date selection - whitout loop
  await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(5000);
});
