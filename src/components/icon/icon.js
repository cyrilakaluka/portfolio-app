import BaseComponent from "../../common/base-component.js";
import template from "./icon-template.js";

class GoogleMaterialIcon extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      name: this.getAttribute('name'),
      style: this.getAttribute('icon-style')?.toLocaleLowerCase() || "outlined",
      fill: this.getAttribute('fill'),
      wght: this.getAttribute('wght'),
      grad: this.getAttribute('grad'),
      opsz: this.getAttribute('opsz'),
      color: this.getAttribute('color'),
      enframe: this.hasAttribute('enframe')
    };

    this.render(props);
  }
}

customElements.define('app-icon', GoogleMaterialIcon);