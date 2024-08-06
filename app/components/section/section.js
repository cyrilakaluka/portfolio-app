import template from './section-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class Section extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const context = {
      title: this.dataset.title
    };

    this.render(context);
  }
}

customElements.define('app-section', Section);