import template from "./hero-template.js";
import BaseComponent from "../../common/base-component.js";

class Hero extends BaseComponent {
  #socials = [];
  #socialsWrapper;

  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();

    this.#socialsWrapper = this.shadowRoot.querySelector('.socials');
    this.#socials = Array.from(this.#socialsWrapper.querySelectorAll('app-social-media'));

    this.#saveOriginalSocialsState();
    this.#addStateListeners();

    const mediaQuery = window.matchMedia('(max-width: 650px)');
    mediaQuery.addEventListener('change', this.#handleMediaQuery);

    this.#handleMediaQuery(mediaQuery);
  }

  #expandAllSocialLinks = () => {
    this.#socials.forEach(x => {
      x.setAttribute('state', 'expanded');
    });
  };

  #collapseAllSocialLinks = () => {
    this.#socials.forEach(x => {
      x.setAttribute('state', 'collapsed');
    });
  };

  #restoreAllSocialLinksOriginalState = () => {
    this.#socials.forEach(x => {
      const originalState = x.getAttribute('original-state');
      x.setAttribute('state', originalState);
    });
  };

  #addStateListeners() {
    this.#socialsWrapper.addEventListener('mouseenter', this.#expandAllSocialLinks);
    this.#socialsWrapper.addEventListener('mouseleave', this.#restoreAllSocialLinksOriginalState);
  }

  #removeStateListeners() {
    this.#socialsWrapper.removeEventListener('mouseenter', this.#expandAllSocialLinks);
    this.#socialsWrapper.removeEventListener('mouseleave', this.#restoreAllSocialLinksOriginalState);
  }

  #saveOriginalSocialsState() {
    this.#socials.forEach(x => {
      x.setAttribute('original-state', x.getAttribute('state'));
    });
  }

  #handleMediaQuery = (event) => {
    if (event.matches) {
      this.#removeStateListeners();
      this.#collapseAllSocialLinks();
      return;
    }

    this.#restoreAllSocialLinksOriginalState();
    this.#addStateListeners();
  };
}

customElements.define('app-hero', Hero);