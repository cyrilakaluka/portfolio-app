import BaseComponent from '../../common/base-component.js';
import template from './media-block-template.js';

class MediaBlock extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render(this.attributesAsObject());
  }
}

customElements.define('app-media-block', MediaBlock);