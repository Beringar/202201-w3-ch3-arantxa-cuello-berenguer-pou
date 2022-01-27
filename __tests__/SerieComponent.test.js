import Component from "./Component.js";

describe("Given a Serie Component", () => {
  describe("When it´s instance with a delete button", () => {
    test("Then it should render a button", () => {
      const container = document.createElement("i");

      const className = "icon--delete";

      const button = new ButtonComponent(container, className);

      expect(button.querySelector("i")).not.toBeNull();
    });
  });
  describe("When it´s instance with serie data", () => {
    test("Then it should render the serie title", () => {
      const className = "serie__title";
      const container = document.createElement("h4");

      const newSerie = newComponent(container, className);

      expect(newSerie.querySelector("h4").toBe("serie__title"));
    });
  });
});

export default SerieComponent;
