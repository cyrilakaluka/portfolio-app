import BaseComponent from '../../common/base-component.js';
import template from './call-to-action-template.js';

class CallToAction extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      type: this.getAttribute('type'),
      variant: this.getAttribute('variant'),
      noShadow: this.hasAttribute('no-shadow'),
      textContent: this.textContent,
      href: this.getAttribute('href')
    };

    this.render(props);

    const callToActionElement = this.rootElement.querySelector('.cta');
    callToActionElement.addEventListener('click', (event) => {
      this.dispatchEvent(new CustomEvent('app-cta-click', {
        detail: {
          id: this.getAttribute('id'),
          event
        },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('app-cta', CallToAction);