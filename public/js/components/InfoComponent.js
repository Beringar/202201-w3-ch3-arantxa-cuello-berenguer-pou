import Component from "./Component.js";

class InfoComponent extends Component {
  constructor(parentElement, htmlTag) {
    super(parentElement, htmlTag);

    this.generateHTML();
  }

  generateHTML() {
    this.element.textContent = `You have watched  movies`;
  }
}

export default InfoComponent;
