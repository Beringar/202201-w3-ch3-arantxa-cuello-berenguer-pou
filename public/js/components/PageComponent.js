import seriesAPI from "../../data/series.js";
import Component from "./Component.js";
import InfoComponent from "./InfoComponent.js";
import SeriesListComponent from "./SeriesList.js";

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
            <section class="info-pending>
            PENDING SERIES INFO AND COUNTER...
            </section>
            <section class="pending-series">
            PENDING SERIES CARDS...
            </section>
          </section>
          <section class="series-watched">
            <section class="info-watched>
            WATCHED SERIES INFO AND COUNTER...
            </section>
            <section class="watched-series">
            WATCHED SERIES CARDS...
            </section>
          </section>
        </section>
      </main> 
    </div> 
    `;

    // render pending section pasando parámetros
    this.renderInfoSeriesComponent();
    this.renderSeriesList();

    // render watched section pasando parámetros
    this.renderInfoSeriesComponent();
    this.renderSeriesList();
  }

  renderInfoComponent() {}

  renderSeriesList() {}
}

export default PageComponent;
