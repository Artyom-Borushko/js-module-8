describe("basic test", () => {
  it("should open app", () => {
    const element = $("~Layout Animations");
    $("~Animation").click();
    expect(element.isDisplayed()).toBe(true);
  });

  it("should open app", () => {
    const element = $("~Add Button");
    $("~Layout Animations").click();
    expect(element.isDisplayed()).toBe(true);
  });

  it("should open app", () => {
    const element = $("~Changing-In");
    $("~Add Button").click();
    expect(element.isDisplayed()).toBe(true);
  });
});
