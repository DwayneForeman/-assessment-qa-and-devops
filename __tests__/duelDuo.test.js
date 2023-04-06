const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();
    const choicesId = await driver.findElement(By.id("choices"));
    expect(await choicesId.isDisplayed()).toBe(true);
    await driver.sleep(5000);
  });

  test(`"Add to Duo” button displays the div with id = “player-duo`, async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(5000);
    const drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();
    const addToDuoBtn = await driver.findElement(
      By.css("#choices > div:nth-child(1) > button")
    );

    await addToDuoBtn.click();
    const playerDuoId = await driver.findElement(By.id("player-duo"));
    expect(await playerDuoId.isDisplayed()).toBe(true);
  });
});
