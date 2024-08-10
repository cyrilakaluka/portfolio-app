import template from './contact-template.js';
import BaseComponent from '../../common/base-component.js';

class Contact extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-contact', Contact);