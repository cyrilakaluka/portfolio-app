import BaseComponent from '../../common/base-component.js';
import template from './layout-template.js';

class Layout extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-layout', Layout);