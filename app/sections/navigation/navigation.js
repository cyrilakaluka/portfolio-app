import template from './navigation-template.js';
import BaseComponent from '../../common/BaseComponent.js';


class Navigation extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-navigation', Navigation);