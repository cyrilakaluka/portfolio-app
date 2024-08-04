import template from './socials-template.js';
import style from './socials-style.js';
import { renderHtml } from '../../utils/utils.js';

class SocialMediaLink extends HTMLElement {
  static displayNameMap = {
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn"
  };

  static automatedHoverClass = 'automated-hover';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get name() {
    return this.getAttribute('name');
  }

  get behavior() {
    return this.getAttribute('behavior');
  }

  connectedCallback() {
    const context = {
      name: this.name,
      displayName: SocialMediaLink.displayNameMap[this.name],
      size: this.getAttribute('size'),
      expanded: this.behavior === 'expanded',
      expandOnHover: this.behavior === 'expand-on-hover',
      href: this.getAttribute('href')
    };

    renderHtml(this, { template, style, context });
    this.$host = this.shadowRoot.host;
  }

  activateHover() {
    if (!this.$host.classList.contains(SocialMediaLink.automatedHoverClass)) {
      this.$host.classList.add(SocialMediaLink.automatedHoverClass);
    }
  }

  deactivateHover() {
    this.$host.classList.remove(SocialMediaLink.automatedHoverClass);
  }
}

customElements.define('app-social-media', SocialMediaLink);