import template from './section-template.js';
import BaseComponent from '../../common/BaseComponent.js';

class Section extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      title: this.dataset.title
    };

    this.render(props);
  }
}

customElements.define('app-section', Section);