import { test, expect } from "@playwright/test";

test("page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test.only("Element screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/index.php?route=cms/demo");
  await page.getByRole("link", { name: "View Store Front" }).screenshot({
    path: "tests/screenshots/" + Date.now() + "StoreFront.png",
  });
});
