import template from './socials-template.js';
import BaseComponent from '../../common/base-component.js';

class SocialMediaLink extends BaseComponent {
  static socialLinks = {
    'LinkedIn': 'https://www.linkedin.com/in/ccakaluka/',
    'Facebook': 'https://www.facebook.com/bushlee247',
    'Twitter': 'https://x.com/cakaluka',
    'WhatsApp': 'https://wa.me/qr/PZOY2XJ64HAZH1'
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
      href: SocialMediaLink.socialLinks[this.name],
      color: this.getAttribute('color'),
    };

    this.render(props);
    super.addAppThemeChangeListener();
  }

  disconnectedCallback() {
    super.removeAppThemeChangeListener();
  }
}

customElements.define('app-social-media', SocialMediaLink);