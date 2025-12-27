import { test, expect, chromium } from "@playwright/test";
import { skip } from "node:test";
//only
/*test.only("test1", async ({ page }) => {
  console.log("this is test1");
});
*/

//skip
/*
test.skip("test2", async ({ page }) => {
  console.log("this is test2");
});
*/
/*
test("test3", async ({ page, browserName }) => {
  console.log("this is test3");
  if (browserName === "chromium") {
    test.skip();
  }
});
*/
/*
//fixme
test("test4", async ({ page }) => {
  test.fixme();
  console.log("this is test4....");
});
*/

//fail --- Negative testing
/*
test("test5", async ({ page }) => {
  test.fail(); //expected
  console.log("this is test5....");
  expect(1).toBe(2); //actual
});
*/
/*
test("test6", async ({ page, browserName }) => {
  if (browserName === "chromium") {
    test.fail(); //exp
  }
});
*/
// slow()
test("test7", async ({ page }) => {
  // test.slow();
  test.setTimeout(5000);
  await page.goto("https://demoblaze.com/index.html");
  console.log("this is test7...");
});
