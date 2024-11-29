import { Given } from "@cucumber/cucumber";

Given(
  /^I am on the "([^"]*)" page$/,
  async function(pageId: string) {
    await global.page.goto("http://localhost:3000");
    console.log("I am on the " + pageId + " page");
    
  }
)