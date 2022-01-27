import seriesAPI from "../data/series.js";
import Component from "./Component.js";
import InfoComponent from "./InfoComponent.js";
import SerieComponent from "./SerieComponent.js";

class PageComponent extends Component {
  series = seriesAPI;

  constructor(parentElement) {
    super(parentElement, "page");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <div class="container">
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <section class="info-pending">
            </section>
            <section class="pending-series">
              <ul class="series-list">
              </ul>
            </section>
          </section>
          <section class="series-watched">
            <section class="info-watched">
            </section>
            <section class="watched-series">
            <ul class="series-list">
              </ul>
            </section>
          </section>
        </section>
      </main> 
    </div> 
    `;

    this.renderSeriesList();
    this.renderInfoComponents();
  }

  renderInfoComponents() {
    const infoPendingContainer = this.element.querySelector(".info-pending");
    const infoWatchedContainer = this.element.querySelector(".info-watched");
    infoPendingContainer.innerHTML = "";
    infoWatchedContainer.innerHTML = "";
    new InfoComponent(infoPendingContainer, "section", false);
    new InfoComponent(infoWatchedContainer, "section", true);
  }

  renderSeriesList() {
    const pendingSeriesContainer = this.element.querySelector(
      ".pending-series .series-list"
    );
    const watchedSeriesContainer = this.element.querySelector(
      ".watched-series .series-list"
    );
    pendingSeriesContainer.innerHTML = "";
    watchedSeriesContainer.innerHTML = "";
    this.series.forEach((serie) => {
      const container = serie.watched
        ? watchedSeriesContainer
        : pendingSeriesContainer;
      new SerieComponent(container, "li", serie, () =>
        this.removeSerie(serie.id)
      );
    });
  }

  // action to pass to serie component
  removeSerie(id) {
    const serieFoundIndex = this.series.findIndex((serie) => serie.id === id);
    this.series.splice(serieFoundIndex, 1);
    this.element.querySelector(`[data-serie="${id}"]`).remove();
    this.renderSeriesList();
    this.renderInfoComponents();
  }
}

export default PageComponent;
