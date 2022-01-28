import InfoComponent from "../public/js/components/InfoComponent.js";

describe("Given a InfoComponent", () => {
  describe("When it's instanced with a 3", () => {
    test("Then it should display the text 'You have watched 3 series'.", () => {
      const container = document.createElement("h3");
      const totalSeries = 3;
      const expectedText = `You have watched ${totalSeries} series.`;

      new InfoComponent(container, "p", true);

      expect(container.textContent).toMatch(expectedText);
    });
  });
});
