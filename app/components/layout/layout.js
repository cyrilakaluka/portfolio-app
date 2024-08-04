import { renderHtml } from '../../utils/utils.js';
import template from './layout-template.js';

class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    renderHtml(this, { template });
  }
}

customElements.define('app-layout', Layout);