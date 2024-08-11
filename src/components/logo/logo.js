import template from './logo-template.js';
import BaseComponent from '../../common/base-component.js';

class Logo extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      href: this.dataset.href
    };

    this.render(props);
  }
}

customElements.define('app-logo', Logo);