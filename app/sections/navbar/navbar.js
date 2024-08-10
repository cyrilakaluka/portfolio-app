import template from './navbar-template.js';
import BaseComponent from '../../common/base-component.js';


class NavBar extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-navbar', NavBar);