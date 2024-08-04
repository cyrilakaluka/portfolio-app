import template from './logo-template.js';
import style from './logo-style.js';
import { renderHtml } from '../../utils/utils.js';

class Logo extends HTMLElement {
  /**
   *
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const context = {
      size: this.dataset.size,
      href: this.dataset.href
    };

    renderHtml(this, { template, style, context });
  }
}

customElements.define('app-logo', Logo);