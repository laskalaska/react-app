import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then(
  /^the "([^"]*)" should contain the text "([^"]*)"$/,
  async function(elementKey: string, expectedElementText: string) {
    const {
      screen: {page}
    } = this;
    
    const content = await page.textContent("[data-id='contacts']");
    expect(content).toBe(expectedElementText);
    console.log(`the ${elementKey} should contain the text ${expectedElementText}`);
  }
)

Then(
  /^the "([^"]*)" should be displayed$/,
  async function(elementKey: string) {
    const {
      screen: {page}
    } = this;

    const locator = await page.locator("[class='testing-talks-logo']");
    await expect(locator).toBeVisible();
    console.log(`${elementKey} should be displayed`);
  }
)

Then(
  /^the button should be displayed$/,
  async function() {
    const {
      screen: {page}
    } = this;

    const locator = await page.locator("[class='color_h1']");
    await expect(locator).toBeVisible();
    console.log(`H1 should be displayed`);
  }
)