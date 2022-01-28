import seriesAPI from "../data/series.js";
import Component from "./Component.js";

class RatingComponent extends Component {
  series = seriesAPI;
  serie;
  actionOnClick;
  constructor(parentElement, serie, actionOnClick) {
    super(parentElement, "score", "ul");
    this.serie = serie;
    this.actionOnClick = actionOnClick;

    this.generateHTML();
    this.addListeners();
  }

  generateHTML() {
    this.element.dataset.serieID = this.serie.id;
    this.renderStars(this.serie);
  }

  renderStars(serie) {
    this.element.innerHTML = "";
    const starsLength = 5;
    const ratingScore = serie.score;
    for (let i = 1; i <= starsLength; i++) {
      let classStar = "far";
      if (i <= ratingScore) {
        classStar = "fas";
      }
      const starElement = document.createElement("li");
      starElement.className = "score__star";
      starElement.dataset.starValue = i;
      starElement.innerHTML = `<i class="icon--score ${classStar} fa-star" title="${i}/${i}"></i>`;
      this.element.append(starElement);
    }
  }

  addListeners() {
    const liStars = this.element.children;
    Array.from(liStars).forEach((star) =>
      star.addEventListener("click", () => {
        this.setScore(star.dataset.starValue);
      })
    );
  }

  setScore(starValue) {
    const serieFoundIndex = this.series.findIndex(
      (serie) => serie.id === this.serie.id
    );
    this.series[serieFoundIndex].score = starValue;
    if (this.series[serieFoundIndex].score > 0) {
      this.series[serieFoundIndex].watched = true;
      this.actionOnClick();
    } else {
      this.renderStars(this.serie);
      this.addListeners();
    }
  }
}

export default RatingComponent;
