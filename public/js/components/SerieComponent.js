import Component from "./Component.js";

class SerieComponent extends Component {
  constructor(parentElement, htmlTag, actionOnClick) {
    super(parentElement, htmlTag);

    this.actionOnClick = actionOnClick;

    this.generateHTML();
    this.addListeners();
  }

  generateHTML() {
    this.element.innerHTML = ` 
              <li class="serie">
                <img
                  class="serie__poster"
                  src="img/${this.series.poster}"
                  alt="The ${this.series.name} poster"
                />
                <h4 class="serie__title">${this.series.name}</h4>
                <p class="serie__info">${this.series.creator}</p>
               
                <i class="fas fa-times-circle icon--delete"></i>
              </li>`;
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default SerieComponent;
