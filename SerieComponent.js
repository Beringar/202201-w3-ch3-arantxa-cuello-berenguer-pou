import Component from "./"

class SerieComponent extends Component{
  constructor(parentElement, htmlTag, actionOnClick,){
    super();

    this.actionOnClick = actionOnClick;

    this.generateHTML();
    this.addListeners();

  }

  generateHTML(){
    this.element.innerHTML =

  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default SerieComponent;
