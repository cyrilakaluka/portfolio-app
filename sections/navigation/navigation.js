import template from './navigation-template.js';
import style from './navigation-style.js';
import { renderHtml } from '../../utils/utils.js';


class Navigation extends HTMLElement {
  /**
   *
   */
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    renderHtml(this, { template, style });
  }
}

customElements.define('app-navigation', Navigation);