import template from './button-template.js';
import style from './button-style.js';
import { renderHtml } from '../../utils/utils.js';

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const context = {
      type: this.getAttribute('type'),
      variant: this.getAttribute('variant')
    };
    renderHtml(this, { template, style, context });
  }
}

customElements.define('app-button', Button);