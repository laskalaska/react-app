// import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
// import { setDefaultTimeout } from "@cucumber/cucumber"
// import { chromium } from "playwright";
// // const {chromium} = require "playwright";

// BeforeAll({timeout: 60 * 1000}, async () => {
//   global.browser = await chromium.launch({
//     headless: false,
//   }
//   )
// })

// AfterAll(async () => {
//   await global.browser.close();
// })

// Before(async (scenario) => {
//   global.context = await global.browser.newContext({
//     recordVideo: {
//       dir: "./reports/videos/" + scenario.pickle.name,
//     },
//     // recordHar: {
//     //   path: "./reports/hars/" + scenario.pickle.name + ".har",
//     // },
//     // recordNetwork: "on",
//   });
//   global.page = await global.context.newPage();
// })

// After(async (scenario) => {

//   const scenarioStatus = scenario.result?.status;
//   if (scenarioStatus === 'FAILED') {
//     await global.page.screenshot({
//       path: "./reports/screenshots/" + scenario.pickle.name + ".png",
//     });
//   }
//   await global.page.close();
// })