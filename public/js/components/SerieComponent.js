import Component from "./Component.js";

class SerieComponent extends Component {
  serie;
  actionOnClick;

  constructor(parentElement, htmlTag, serie, actionOnClick) {
    super(parentElement, "serie", htmlTag);
    this.serie = serie;
    this.actionOnClick = actionOnClick;

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
    this.element.querySelector();
    parentDiv.insertBefore(newNode, sp2);
  }

  addListeners() {
    this.element
      .querySelector(".icon--delete")
      .addEventListener("click", this.actionOnClick);
  }
}

export default SerieComponent;
