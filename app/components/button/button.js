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

    const buttonElement = this.rootElement.querySelector('.button');
    buttonElement.addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('app-button-click', {
        detail: {
          id: this.getAttribute('id'),
          event
        },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('app-button', Button);