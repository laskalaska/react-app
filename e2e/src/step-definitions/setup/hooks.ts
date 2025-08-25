import { Before, After, ITestCaseHookParameter } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";
// const {chromium} = require "playwright";

Before(async function (this: ScenarioWorld, scenario) {
  console.log('Running cucumber scenario' + scenario.pickle.name);

  const contextOptions = {
    recordVideo: {
      dir: "./reports/videos/" + scenario.pickle.name,
    },
  };

  const ready = await this.init(contextOptions);
  return ready;
})

After(async function(this: ScenarioWorld, scenario) { // this: ScenarioWorld → only tells TypeScript what this should look like.
  const {
    screen: {page, browser}
  } = this; // { screen: { browser } } = this → creates a local variable browser. “pull out the browser property from this.screen into a local variable named browser”

  const scenarioStatus = scenario.result?.status;
  if (scenarioStatus === 'FAILED') {
    await page.screenshot({
      path: "./reports/screenshots/" + scenario.pickle.name + ".png",
    });
  }
  await browser.close(); // browser.close() works because browser is no longer on this — you pulled it out. Without destructuring, you'd need this.screen.browser.close().
  return browser
})