import Component from "./Component.js";

describe("Given a Serie Component", () => {
  describe("When it´s instance with series data", () => {
    test("Then it should display the name of the serie", () => {
      const container = document.createElement("li");
      const serie = `
        <img
          class="serie__poster"
          src="${this.serie.poster}"
          alt="The ${this.serie.name} poster"
        />`;

      new serieComponent(container, "li", serie);
    });
  });
});

export default SerieComponent;
