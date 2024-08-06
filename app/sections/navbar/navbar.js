import template from './navbar-template.js';
import BaseComponent from '../../common/BaseComponent.js';


class NavBar extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-navbar', NavBar);