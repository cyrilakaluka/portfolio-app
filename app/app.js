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
        <app-hero></app-hero>
        <app-about-me></app-about-me>
        <app-skills></app-skills>
      </app-layout>
    `;
  }
}

customElements.define('app-root', App);