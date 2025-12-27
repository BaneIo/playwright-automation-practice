import { test, expect } from "@playwright/test";

test("frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total frames
  const allframes = await page.frames();
  console.log("Number of frames:", allframes.length);

  //approach 1: using name or url of the page
  //const frame1= await page.frame('name') // if name is present
  //const frame1 = await page.frame({
  // url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //});
  //await frame1.fill("[name = 'mytext1']", "Hello World");

  //approach 2- using frame locator
  /*
  const inputbox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name = 'mytext1']");
  inputbox.fill("Hello World");
  */
  const inputbox = await page
    .frameLocator('[src*="frame_1.html"]')
    .getByRole("textbox");
  await inputbox.fill("Hello World");

  await expect(inputbox).toHaveValue("Hello World");

  //await page.waitForTimeout(5000);
});
