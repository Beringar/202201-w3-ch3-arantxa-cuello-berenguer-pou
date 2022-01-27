// import seriesAPI from "../public/js/data/series.js";
// import Component from "../public/js/components/Component.js";
// import InfoComponent from "../public/js/components/InfoComponent.js";
// import SerieComponent from "../public/js/components/SerieComponent.js";
import PageComponent from "../public/js/components/PageComponent.js";

let pageComponent;
let appContainer;
const series = [
  {
    id: 1,
    name: "The Sopranos",
    creator: "David Chase",
    year: 1999,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    watched: true,
    score: 1,
    emmies: 21,
  },
  {
    id: 2,
    name: "Game of Thrones",
    creator: "David Benioff D. B. Weiss",
    year: 2011,
    poster:
      "https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==",
    watched: false,
    score: 0,
    emmies: 164,
  },
];

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

  describe("When it's instantiated with a parent container", () => {
    test("Then it should render 1 section with class .info-pending", () => {
      const pageElement = appContainer.querySelector("div.page");
      const expectedInfoPendingSections = 1;
      const numberOfInfoPendingSections = pageElement.querySelectorAll(
        "section.info-pending"
      ).length;
      expect(numberOfInfoPendingSections).toBe(expectedInfoPendingSections);
    });
  });

  describe("When it's instantiated with a parent container", () => {
    test("Then it should render 1 section with class .info-watched", () => {
      const pageElement = appContainer.querySelector("div.page");
      const expectedInfoWatchedSections = 1;
      const numberOfInfoWatchedSections = pageElement.querySelectorAll(
        "section.info-watched"
      ).length;
      expect(numberOfInfoWatchedSections).toBe(expectedInfoWatchedSections);
    });
  });

  describe("When it's instantiated with a parent container", () => {
    test("Then it should render 1 ul element with class .series-list", () => {
      const pageElement = appContainer.querySelector("div.page");
      const expectedUlPendingSections = 1;
      const numberOfPendingSections =
        pageElement.querySelectorAll("ul.series-list").length;
      expect(numberOfPendingSections).toBe(expectedUlPendingSections);
    });
  });

  describe("When it's instantiated with a parent container", () => {
    test("Then it should render 1 ul element with class .series-list--watched", () => {
      const pageElement = appContainer.querySelector("div.page");
      const expectedUlSections = 1;
      const numberOfUlWatched = pageElement.querySelectorAll(
        "ul.series-list--watched"
      ).length;
      expect(numberOfUlWatched).toBe(expectedUlSections);
    });
  });
});
