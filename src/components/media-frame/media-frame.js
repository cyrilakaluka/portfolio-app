import template from './media-frame-template.js';
import BaseComponent from '../../common/base-component.js';

export default class MediaFrame extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-media-frame', MediaFrame);