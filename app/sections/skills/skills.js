import template from './skills-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class Skills extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-skills', Skills);