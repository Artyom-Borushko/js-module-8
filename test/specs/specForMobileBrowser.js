const PageFactory = require("../pageObject/pageFactory"),
  EC = protractor.ExpectedConditions;

describe("basic test", () => {
  beforeEach(() => {
    browser.get("https://www.epam.com/about");
  });

  it("should click on menu button", () => {
    const homeButton = PageFactory.getPage("Browser").menuList;
    PageFactory.getPage("Browser").menu.click();
    browser.wait(EC.visibilityOf(homeButton), 6000);
    expect(homeButton.isDisplayed()).toBe(true);
  });

  it("should click on search button and enter some text in searchline", () => {
    const searchInput = PageFactory.getPage("Browser").searchLine;
    PageFactory.getPage("Browser").searchButton.click();
    PageFactory.getPage("Browser").searchLine.sendKeys("Automation");
    browser.wait(EC.visibilityOf(searchInput), 6000);
    expect(searchInput.isDisplayed()).toBe(true);
  });

  it("should click on contact us button", () => {
    PageFactory.getPage("Browser").supportButton.click();
    const title = browser.getTitle();
    expect(title).toEqual("Learn more about EPAM and Contact Us | EPAM");
  });

  it("should click on epam button", () => {
    PageFactory.getPage("Browser").epamLogoButton.click();
    const title = browser.getTitle();
    expect(title).toEqual("EPAM | Enterprise Software Development, Design & Consulting");
  });
});
