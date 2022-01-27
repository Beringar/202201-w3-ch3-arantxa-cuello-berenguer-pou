import seriesAPI from "../public/js/data/series.js";
import Component from "../public/js/components/Component.js";
import InfoComponent from "../public/js/components/InfoComponent.js";
import SerieComponent from "../public/js/components/SerieComponent.js";
import PageComponent from "../public/js/components/PageComponent.js";

let pageComponent;
let appContainer;

describe("Given an PageComponent component", () => {
  beforeAll(() => {
    appContainer = document.createElement("div");
    pageComponent = new PageComponent(appContainer);
  });
  describe("When it's instantiated with a parent container", () => {
    test("Then it should render a div with class .page element as a child of that container", () => {
      const pageElement = appContainer.querySelector("div.page");

      expect(pageElement).not.toBeNull();
    });
  });
});
