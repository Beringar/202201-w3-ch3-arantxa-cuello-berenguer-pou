import Component from "./Component.js";
import RatingComponent from "./RatingComponent.js";

class SerieComponent extends Component {
  serie;
  iconDeleteAction;
  scoreAction;

  constructor(parentElement, htmlTag, serie, iconDeleteaction, scoreAction) {
    super(parentElement, "serie", htmlTag);
    this.serie = serie;
    this.iconDeleteAction = iconDeleteaction;
    this.scoreAction = scoreAction;

    this.generateHTML(serie);
    this.addListeners();
  }

  generateHTML() {
    this.element.dataset.serie = this.serie.id;
    this.element.innerHTML = ` 
                <img
                  class="serie__poster"
                  src="${this.serie.poster}"
                  alt="The ${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                <ul class="score">
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;

    new RatingComponent(this.element, this.serie, this.scoreAction);
  }

  addListeners() {
    this.element
      .querySelector(".icon--delete")
      .addEventListener("click", this.iconDeleteAction);
  }
}

export default SerieComponent;
