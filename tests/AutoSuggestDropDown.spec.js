import { test, expect } from "@playwright/test";

test("AutoSuggestDropDown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");
  await page.locator("#src").fill("Delhi");
  await page.waitForSelector("//li[contains(@class, 'sc-iwsKbi')]/div/text[1]");
  const fromCityOptions = await page.$$(
    "li[contains(@class, 'sc-iwsKbi')]/div/text[1]"
  );

  for (let option of fromCityOptions) {
    const value = await option.textContent();
    // console.log(value);
    if (value.includes("Anand Vihar")) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});

/*
test("RedBus autosuggest dropdown - fixed for new 2025 UI", async ({
  page,
}) => {
  // 1️⃣ Otvori RedBus
  await page.goto("https://www.redbus.in/", { waitUntil: "domcontentloaded" });

  // 2️⃣ Ako postoji cookie baner — zatvori
  const cookieButton = page.locator('button:has-text("Accept All")');
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  // 3️⃣ Pronađi polje "From" po placeholderu
  const fromInput = page.locator('input[placeholder="Enter Source"]');
  await fromInput.waitFor({ state: "visible", timeout: 15000 });
  await fromInput.click();
  await fromInput.fill("Del");

  // 4️⃣ Sačekaj da se prikažu sugestije
  const fromSuggestions = page.locator("ul.sc-dnqmqq li div.sc-jrAGrp");
  await fromSuggestions.first().waitFor({ state: "visible", timeout: 10000 });

  const fromList = await fromSuggestions.allTextContents();
  console.log("FROM sugestije:", fromList);

  // Klikni na "Kashmiri Gate" ako postoji, inače na prvu opciju
  const kashmiriOption = page.locator("li", { hasText: "Kashmiri Gate" });
  if (await kashmiriOption.isVisible()) {
    await kashmiriOption.click();
  } else {
    await fromSuggestions.first().click();
  }

  // 5️⃣ Pronađi polje "To"
  const toInput = page.locator('input[placeholder="Enter Destination"]');
  await toInput.waitFor({ state: "visible", timeout: 15000 });
  await toInput.click();
  await toInput.fill("Che");

  // 6️⃣ Sugestije za TO
  const toSuggestions = page.locator("ul.sc-dnqmqq li div.sc-jrAGrp");
  await toSuggestions.first().waitFor({ state: "visible", timeout: 10000 });

  const toList = await toSuggestions.allTextContents();
  console.log("TO sugestije:", toList);

  const chennaiOption = page.locator("li", { hasText: "Chennai" });
  if (await chennaiOption.isVisible()) {
    await chennaiOption.click();
  } else {
    await toSuggestions.first().click();
  }

  // 7️⃣ Provera unetih vrednosti
  const fromValue = await fromInput.inputValue();
  const toValue = await toInput.inputValue();

  console.log(`Izabrano FROM: ${fromValue}, TO: ${toValue}`);
  expect(fromValue).toContain("Delhi");
  expect(toValue).toContain("Chennai");

  await page.waitForTimeout(2000);
});
*/
