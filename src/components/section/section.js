import template from './section-template.js';
import BaseComponent from '../../common/base-component.js';

class Section extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      title: this.dataset.title
    };

    this.render(props);

    super.addAppThemeChangeListener();
  }

  disconnectedCallback() {
    super.removeAppThemeChangeListener();
  }
}

customElements.define('app-section', Section);