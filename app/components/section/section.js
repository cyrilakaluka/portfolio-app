import template from './section-template.js';
import { renderHtml } from '../../utils/utils.js';

class Section extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const context = {
      title: this.dataset.title
    };

    renderHtml(this, { template, context });
  }
}

customElements.define('app-section', Section);