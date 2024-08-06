import template from './logo-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class Logo extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      size: this.dataset.size,
      href: this.dataset.href
    };

    this.render(props);
  }
}

customElements.define('app-logo', Logo);