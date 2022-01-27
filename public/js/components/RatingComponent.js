import Component from "./Component.js";

class RatingComponent extends Component {
  score;
  constructor(parentElement, serie, actionOnClick) {
    super(parentElement, "score", "ul");
    this.serie = serie;

    this.generateHTML();
    this.addListeners(actionOnClick);
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

  addListeners(actionOnClick) {
    const liStars = this.element.children;
    /* for (let i = 0; i < liStars.length; i++) {
      
    } */
    // this.element.addEventListener("click", actionOnClick);
  }
}

export default RatingComponent;
