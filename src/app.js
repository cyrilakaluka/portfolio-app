import './sections/index.js';
import './components/index.js';
import { html } from './common/utils.js';

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.#render();
    this.#addAppNavbarNavigateEventListener();
  }

  disconnectedCallback() {
    document.removeEventListener('app-navbar-navigate', this.#addAppNavbarNavigateEventListener);
  }

  #render() {
    this.innerHTML = html`
      <app-layout>
        <app-navbar id="navbar" slot="header"></app-navbar>
        <app-hero id="home" slot="hero"></app-hero>
        <app-about-me id="about"></app-about-me>
        <app-skills id="skills"></app-skills>
        <app-resume id="resume"></app-resume>
        <app-contact id="contact"></app-contact>
        <app-footer id="footer" slot="footer"></app-footer>
      </app-layout>
    `;
  }

  #addAppNavbarNavigateEventListener() {
    document.addEventListener('app-navbar-navigate', event => {
      const { href } = event.detail;

      if (href.startsWith('#')) {
        const navbar = this.querySelector('#navbar');
        const navbarHeight = navbar.offsetHeight;

        const section = this.querySelector(href);
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });
      }
    });
  }
}

customElements.define('app-root', App);