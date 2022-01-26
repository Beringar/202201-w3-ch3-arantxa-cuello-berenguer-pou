import Component from "./Component.js";

class RatingComponent extends Component {
  constructor(parentElement, className, icon, actionOnClick) {
    super(parentElement, className);

    this.generateHTML();

    this.addListeners(actionOnClick);
  }

  generateHTML() {
    this.element.innerHTML = ` 
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>`;
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default RatingComponent;
