import { renderHtml } from "../../utils/utils.js";
import template from "./icon-template.js";

class GoogleMaterialIcon extends HTMLElement {
  /**
   *
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const context = {
      name: this.getAttribute('name'),
      size: this.getAttribute('size'),
      fill: this.getAttribute('fill'),
      wght: this.getAttribute('wght'),
      grad: this.getAttribute('grad'),
      opsz: this.getAttribute('opsz'),
      enframe: this.hasAttribute('enframe')
    };

    renderHtml(this, { template, context });
  }
}

customElements.define('app-icon', GoogleMaterialIcon);