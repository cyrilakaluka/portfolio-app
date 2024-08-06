import template from "./about-template.js";
import { renderHtml } from "../../utils/utils.js";

class AboutMe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    renderHtml(this, { template });
  }
}

customElements.define('app-about-me', AboutMe);