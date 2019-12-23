import { Builder, WebDriver, Capabilities, By } from "selenium-webdriver";
import { LoginPage } from "../../pagesObject/login.po";
import { CalendarPage } from "../../pagesObject//calendar.po";
import { App } from "../../pagesObject/config.po";
import { SeleniumUtils } from "../../utils/se.utils";

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require("chromedriver");
const assert: IAssert = require("assert");

let capabilities = Capabilities.chrome();

capabilities.set("goog:chromeOptions", {
  args: ["--lang=en", "disable-infobars", "--disable-plugins"]
});

describe("Login form", function() {
  let driver: WebDriver;
  let page: LoginPage;
  let calendarPage: CalendarPage;
  let browser: SeleniumUtils;

  before(async function() {
    driver = await new Builder().withCapabilities(capabilities).build();
    page = new LoginPage(driver);
    calendarPage = new CalendarPage(driver);
    browser = new SeleniumUtils(driver);
  });


  it("Positive test", async function() {
    browser.go(App.url);
    await page.isLoad();
    // await page.actionLogin (App.user.login, App.user.password);
 
    driver.get('https://spb.hh.ru/account/login?backurl=%2F');

    // await driver.findElement(By.css('[class="supernova-button"]')).click();
    await page.isLoad();
    await driver.findElement(By.css('[name="username"]')).sendKeys("darya.puhtina@gmail.com");
    await page.isLoad();
    await driver.findElement(By.css('[name="password"]')).sendKeys("zxcvbqw56");
    await page.isLoad();
    await driver.findElement(By.css('[data-qa="account-login-submit"]')).click();
    await page.isLoad();
    await driver.findElement(By.css('[data-qa="search-input"]')).sendKeys("тестировщик");
    await page.isLoad();
    await driver.findElement(By.css('[data-qa="search-button"]')).click();
    // await assert.equal(await page.getText(>1000), true);
    
    // await driver.findElement(By.css('product-btn')).click();
    // await driver.findElement(By.css('fas fa-chevron-right')).click();
    // await page.isLoad();
    // await assert.equal(await page.getText(‘Показ всех 2 элементов’’), true);
 
    // });


  // it("Positive test", async function() {
  //   browser.go(App.url);
  //   await page.isLoad();

  //   driver.get('https://brunoyam.com/verify');
    
  //   await driver.findElement(By.css('[name="fio"]')).sendKeys('Шарина Юлия Валерьевна');
  //   await driver.findElement(By.css('[name="number"]')).sendKeys('TE250-1725');
  //   await driver.findElement(By.css('[type="submit"]')).click();
  //   });
    
    
    
  //   it("Negative test", async function() {
  //     browser.go(App.url);
  //     await page.isLoad();
    
  //   driver.get('https://brunoyam.com/verify');
    
  //   await driver.findElement(By.css('[name="fio"]')).sendKeys('Петрова Юлия Валерьевна');
  //   await driver.findElement(By.css('[name="number"]')).sendKeys('TE250-1725');
  //   await driver.findElement(By.css('[type="submit"]')).click();
  //   });
    

  // it("Positive test", async function() {
  //   browser.go(App.url);
  //   await page.isLoad();

  //   driver.get('http://vk.com');

  //   await driver.findElement(By.css('#index_email')).sendKeys("");
  //   await driver.findElement(By.css('#index_pass')).sendKeys("");
  //   await driver.findElement(By.css('#index_login_button')).click();
  //   await driver.sleep(4000);
  //   await driver.findElement(By.css('#ui_rmenu_recommended')).click();





    // await browser.keys(page.email(), App.user.login);
    // await browser.keys(page.password(), App.user.password);
    // await browser.click(page.submit());
    // await calendarPage.isLoad();
    // await assert.equal(await calendarPage.isPage(), true);
  });

  // it("Negative test", async function() {
  //   debugger;
  //   browser.go(App.url);
  //   await page.isLoad();
  //   await browser.keys(page.email(), App.user.login);
  //   await browser.keys(page.password(), "qweqweqweqwe");
  //   await browser.click(page.submit());
  //   await page.isLoad();
  //   await assert.equal(await page.isPage(), true);
  // });

//   after(() => driver && driver.quit());
});
