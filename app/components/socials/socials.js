import template from './socials-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class SocialMediaLink extends BaseComponent {
  static automatedHoverClass = 'automated-hover';

  constructor() {
    super(template);
    this.$host = this.shadowRoot.host;
  }

  get name() {
    return this.getAttribute('name');
  }

  get behavior() {
    return this.getAttribute('behavior');
  }

  connectedCallback() {
    const props = {
      name: this.name.toLocaleLowerCase(),
      displayName: this.name,
      size: this.getAttribute('size'),
      expanded: this.behavior === 'expanded',
      expandOnHover: this.behavior === 'expand-on-hover',
      href: this.getAttribute('href')
    };

    this.render(props);
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