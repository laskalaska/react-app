import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { setDefaultTimeout } from "@cucumber/cucumber"
import { chromium } from "playwright";
// const {chromium} = require "playwright";

BeforeAll({timeout: 60 * 1000}, async () => {
  global.browser = await chromium.launch({
    headless: false,
  }
  )
})

AfterAll(async () => {
  await global.browser.close();
})

Before(async (scenario) => {
  global.context = await global.browser.newContext();
  global.page = await global.browser.newPage();
})

After(async () => {
  await global.page.close();
})