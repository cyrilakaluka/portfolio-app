import './sections/index.js';
import './components/index.js';

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/`
      <app-layout>
        <app-navigation slot="header"></app-navigation>
        <app-hero id="home" slot="hero"></app-hero>
        <app-about-me id="about"></app-about-me>
        <app-skills id="skills"></app-skills>
        <app-resume id="resume"></app-resume>
        <app-contact id="contact"></app-contact>
      </app-layout>
    `;
  }
}

customElements.define('app-root', App);