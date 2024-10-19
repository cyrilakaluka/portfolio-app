import template from './link-template.js';
import BaseComponent from "../../common/base-component";

export default class Link extends BaseComponent {
  constructor() {
    super(template);
  }

  get href() {
    return this.getAttribute('href');
  }

  connectedCallback() {
    this.render(this.attributesAsObject());
    this.#addLinkClickEventListener();
  }

  #addLinkClickEventListener() {
    const linkElement = this.rootElement.querySelector('.link');

    linkElement.addEventListener('click', event => {
      if (this.href.startsWith('#')) {
        this.#dispatchScrollToSectionEvent(event);
      }
      else {
        this.#dispatchAppLinkClickEvent(event);
      }
    });
  }

  #dispatchScrollToSectionEvent(event) {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('app-scroll-to-section', {
      detail: {
        sectionId: this.href.substring(1)
      },
      bubbles: true,
      composed: true
    }));
  }

  #dispatchAppLinkClickEvent(event) {
    this.dispatchEvent(new CustomEvent('app-link-click', {
      detail: {
        id: this.getAttribute('id'),
        href: this.getAttribute('href'),
        originalEvent: event
      },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('app-link', Link);