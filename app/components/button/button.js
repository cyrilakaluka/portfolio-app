import BaseComponent from '../../common/base-component.js';
import template from './button-template.js';

class Button extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const noShadow = this.hasAttribute('no-shadow');
    this.options = { noShadow };

    const props = {
      type: this.getAttribute('type'),
      variant: this.getAttribute('variant'),
      noShadow,
      textContent: this.textContent
    };

    this.render(props);
  }
}

customElements.define('app-button', Button);