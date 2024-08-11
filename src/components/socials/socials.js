import template from './socials-template.js';
import BaseComponent from '../../common/base-component.js';

class SocialMediaLink extends BaseComponent {
  static socialLinks = {
    'LinkedIn': 'https://www.linkedin.com/in/cyrilakaluka/',
    'Facebook': 'https://www.facebook.com/cyrilakaluka/',
    'Twitter': 'https://twitter.com/cyrilakaluka',
    'WhatsApp': 'https://wa.me/2349037482415'
  };

  constructor() {
    super(template);
  }

  get name() {
    return this.getAttribute('name');
  }

  connectedCallback() {
    const props = {
      name: this.name.toLocaleLowerCase(),
      size: this.getAttribute('size'),
      displayName: this.name,
      href: SocialMediaLink.socialLinks[this.name]
    };

    this.render(props);
  }
}

customElements.define('app-social-media', SocialMediaLink);