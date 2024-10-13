import template from './logo-template.js';
import BaseComponent from '../../common/base-component.js';

class Logo extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-logo', Logo);