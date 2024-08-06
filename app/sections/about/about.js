import template from "./about-template.js";
import BaseComponent from "../../common/BaseComponent.js";

class AboutMe extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-about-me', AboutMe);