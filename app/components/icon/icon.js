import BaseComponent from "../../common/BaseComponent.js";
import template from "./icon-template.js";

class GoogleMaterialIcon extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      name: this.getAttribute('name'),
      size: this.getAttribute('size'),
      fill: this.getAttribute('fill'),
      wght: this.getAttribute('wght'),
      grad: this.getAttribute('grad'),
      opsz: this.getAttribute('opsz'),
      enframe: this.hasAttribute('enframe')
    };

    this.render(props);
  }
}

customElements.define('app-icon', GoogleMaterialIcon);