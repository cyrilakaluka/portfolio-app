import template from './socials-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class SocialMediaLink extends BaseComponent {
  #host;

  constructor() {
    super(template);
    this.#host = this.shadowRoot.host;
  }

  get name() {
    return this.getAttribute('name');
  }

  connectedCallback() {
    const props = {
      name: this.name.toLocaleLowerCase(),
      displayName: this.name,
      size: this.getAttribute('size'),
      href: this.getAttribute('href')
    };

    this.render(props);
  }
}

customElements.define('app-social-media', SocialMediaLink);