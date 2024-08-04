import template from "./hero-template.js";
import style from "./hero-style.js";
import { renderHtml } from "../../utils/utils.js";

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    renderHtml(this, { template, style });
  }
}

customElements.define('app-landing', Hero);