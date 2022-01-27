import Component from "./Component.js";

describe("Given a Serie Component", () => {
  describe("When it´s instance with a delete button", () => {
    test("Then it should render a button", () => {
      const container = document.createElement("i");

      const className = "icon--delete";

      const button = new ButtonComponent(container, className);

      expect(container.querySelector("i")).not.toBeNull();
    });
  });
});

export default SerieComponent;
