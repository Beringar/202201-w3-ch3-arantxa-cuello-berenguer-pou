import InfoComponent from "../public/js/components/InfoComponent.js";
import Component from "./Component.js";

describe("Given a InfoComponent", () => {
  describe("When it´s instance with a 3", () => {
    test("Then it should display the text 'You have watched 3 series'.", () => {
      const container = document.createElement("h3");
      const totalSeries = 3;
      const expectedText = `You have watched ${this.numberOfSeries} series.`;

      new InfoComponent(container, "p", totalSeries);

      expect(container.textContent).toMatch(expectedText);
    });
  });
});

export default RatingComponent;
