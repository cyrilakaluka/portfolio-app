import template from './navbar-template.js';
import BaseComponent from '../../common/base-component.js';


class NavBar extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
    this.#addNavLinksClickEventListeners();
  }

  #addNavLinksClickEventListeners() {
    const navElements = Array.from(this.rootElement.querySelectorAll('a'));
    navElements.forEach(el => {
      el.addEventListener('click', this.#dispatchAppNavbarNavigateEvent);
    });
  }

  #dispatchAppNavbarNavigateEvent = (event) => {
    event.preventDefault();

    const href = event.target.getAttribute('href') || event.currentTarget.getAttribute('href');
    if (!href) {
      console.warn('href is not defined on any target element');
      return;
    }

    this.dispatchEvent(new CustomEvent('app-navbar-navigate', {
      bubbles: true,
      composed: true,
      detail: { href }
    }));
  };
}

customElements.define('app-navbar', NavBar);