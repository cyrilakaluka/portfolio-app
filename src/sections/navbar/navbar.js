import template from './navbar-template.js';
import BaseComponent from '../../common/base-component.js';
import ContactStore from '../../store/contact.js';

class NavBar extends BaseComponent {
  #mobileMediaQuerySpec = '(max-width: 800px)';

  constructor() {
    super(template);
  }

  static observedAttributes = ['data-theme'];

  connectedCallback() {
    const props = {
      phone: ContactStore.getContactInfo().phone,
      mobileMediaQuerySpec: this.#mobileMediaQuerySpec
    };

    this.render(props);
    this.#addNavLinksClickEventListeners();
    this.#addMenuToggleEventListener();
    this.#addMediaQueryEventListener();
    this.#addOverlayClickEventListener();
    this.#addIntersectingSectionEventListener();
    this.#addThemeToggleClickEventListener();
    super.addAppThemeChangeListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-theme' && oldValue !== newValue) {
      this.#updateAppThemeDependentElements(newValue, oldValue);
    }
  }

  disconnectedCallback() {
    this.#removeIntersectingSectionEventListener();
    super.removeAppThemeChangeListener();
  }

  #addNavLinksClickEventListeners() {
    const navElements = Array.from(this.rootElement.querySelectorAll('app-link'));
    navElements.forEach(el => el.addEventListener('click', this.#deactivateMenu));
  }

  #deactivateMenu = () => {
    const menu = this.rootElement.querySelector('.menu');
    menu.classList.remove('active');
  };

  #addMenuToggleEventListener() {
    const menu = this.rootElement.querySelector('.menu');
    const menuToggle = this.rootElement.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => menu.classList.toggle('active'));
  }

  #addMediaQueryEventListener() {
    const handleMediaQueryChange = (event) => {
      const menu = this.rootElement.querySelector('.menu');

      if (event.matches) {
        menu.classList.add('mobile');
      }
      else {
        menu.classList.remove('mobile');
        this.#deactivateMenu();
      }
    };

    const mediaQuery = window.matchMedia(this.#mobileMediaQuerySpec);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);
  }

  #addOverlayClickEventListener() {
    const overlay = this.rootElement.querySelector('.overlay');
    overlay.addEventListener('click', this.#deactivateMenu);
  }

  #addIntersectingSectionEventListener() {
    document.addEventListener('app-intersecting-section', this.#handleIntersectingSectionEvent);
  }

  #removeIntersectingSectionEventListener() {
    document.removeEventListener('app-intersecting-section', this.#handleIntersectingSectionEvent);
  }

  #handleIntersectingSectionEvent = (event) => {
    const { sectionId } = event.detail;
    const appLinks = Array.from(this.rootElement.querySelectorAll('app-link'));
    const isIntersectingSectionLink = (linkElement) => linkElement.getAttribute('href') === `#${sectionId}`;

    appLinks.forEach(link => {
      link.classList.remove('intersecting');

      if (isIntersectingSectionLink(link)) {
        link.classList.add('intersecting');
      }
    });
  };

  #addThemeToggleClickEventListener() {
    const themeToggle = this.rootElement.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
      const appThemeToggleRequestEvent = new CustomEvent('app-toggle-theme-command', {
        bubbles: true,
        composed: true
      });

      this.dispatchEvent(appThemeToggleRequestEvent);
    });
  }

  #updateAppThemeDependentElements(theme, prevTheme) {
    const themeToggle = this.rootElement.querySelector('.theme-toggle');
    const themeToggleLabel = this.rootElement.querySelector('.theme-toggle-label');
    const switchText = `Switch to ${prevTheme || (theme === 'light' ? 'dark' : 'light')} theme`;

    themeToggle.setAttribute('title', switchText);
    themeToggleLabel.textContent = switchText;
  };
}

customElements.define('app-navbar', NavBar);