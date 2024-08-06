import BaseComponent from '../../common/BaseComponent.js';
import template from './button-template.js';

class Button extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const context = {
      type: this.getAttribute('type'),
      variant: this.getAttribute('variant')
    };

    this.render(context);
  }
}

customElements.define('app-button', Button);