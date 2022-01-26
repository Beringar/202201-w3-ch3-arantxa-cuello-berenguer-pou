import Component from "./Component.js";
import series from "../data/series.js";

class InfoComponent extends Component {
  numberOfSeries;

  constructor(parentElement, htmlTag, watched) {
    super(parentElement, htmlTag);
    this.updatePendingSeries(watched);
    this.generateHTML(watched);
  }

  generateHTML(watched) {
    if (watched) {
      this.element.innerHTML = `<h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${this.numberOfSeries} series.</p>`;
    } else {
      this.element.innerHTML = `<h3 class="subsection-title">Pending series</h3>
            <p class="info">You have ${this.numberOfSeries} series pending to watch.</p>`;
    }
  }

  updatePendingSeries(watched) {
    this.numberOfSeries = watched
      ? series.filter((serie) => serie.watched).length
      : series.filter((serie) => !serie.watched).length;
  }
}

export default InfoComponent;
