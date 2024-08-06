import template from './logo-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class Logo extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const context = {
      size: this.dataset.size,
      href: this.dataset.href
    };

    this.render(context);
  }
}

customElements.define('app-logo', Logo);