import template from "./hero-template.js";
import BaseComponent from "../../common/BaseComponent.js";

class Hero extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
    this.$socials = this.shadowRoot.querySelector('.socials');
    this.$socials.addEventListener('mouseenter', this.#expandAllSocialLinks.bind(this));
    this.$socials.addEventListener('mouseleave', this.#restoreAllSocialLinksOriginalState.bind(this));
  }

  #expandAllSocialLinks() {
    this.#getSocialLinks().forEach(x => {
      const originalState = x.getAttribute('state');
      x.setAttribute('original-state', originalState);
      x.setAttribute('state', 'expanded');
    });
  }

  #restoreAllSocialLinksOriginalState() {
    this.#getSocialLinks().forEach(x => {
      const originalState = x.getAttribute('original-state');
      x.setAttribute('state', originalState);
    });
  }

  #getSocialLinks() {
    return this.$socials.querySelectorAll('app-social-media');
  }
}

customElements.define('app-hero', Hero);