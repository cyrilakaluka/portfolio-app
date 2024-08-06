import template from "./hero-template.js";
import BaseComponent from "../../common/BaseComponent.js";

class Hero extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
    this.$socials = this.shadowRoot.querySelector('.socials');
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

customElements.define('app-hero', Hero);