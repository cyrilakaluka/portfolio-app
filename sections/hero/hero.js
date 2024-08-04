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
    this.$socials = this.shadowRoot.getElementById('socials');
    this.$socials.addEventListener('mouseenter', this.#activateAllSocialLinksHover.bind(this));
    this.$socials.addEventListener('mouseleave', this.#deactivateAllSocialLinksHover.bind(this));
  }

  #activateAllSocialLinksHover() {
    this.#getSocialLinks().forEach(x => {
      x.activateHover();
    });
  }

  #deactivateAllSocialLinksHover() {
    this.#getSocialLinks().forEach(x => {
      x.deactivateHover();
    });
  }

  #getSocialLinks() {
    return this.$socials.querySelectorAll('app-social-media');
  }
}

customElements.define('app-landing', Hero);