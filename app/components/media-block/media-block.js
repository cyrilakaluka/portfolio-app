import { renderHtml } from '../../utils/utils.js';
import template from './media-block-template.js';

class MediaBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get imageUrl() {
    return this.getAttribute('image-url');
  }

  get imageFrameType() {
    return this.getAttribute('image-frame');
  }

  get contentSizeRatio() {
    return this.getAttribute('content-size-ratio');
  }

  get blockTitle() {
    return this.getAttribute('block-title');
  }

  get reverse() {
    return this.hasAttribute('reverse');
  }

  connectedCallback() {
    const context = {
      imageUrl: this.imageUrl,
      imageFrame: this.imageFrameType,
      contentSizeRatio: this.contentSizeRatio,
      blockTitle: this.blockTitle,
      reverse: this.reverse
    };

    renderHtml(this, { template, context });
  }
}

customElements.define('app-media-block', MediaBlock);