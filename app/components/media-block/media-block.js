import BaseComponent from '../../common/BaseComponent.js';
import template from './media-block-template.js';

class MediaBlock extends BaseComponent {
  constructor() {
    super(template);
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
    const props = {
      imageUrl: this.imageUrl,
      imageFrame: this.imageFrameType,
      contentSizeRatio: this.contentSizeRatio,
      blockTitle: this.blockTitle,
      reverse: this.reverse
    };

    this.render(props);
  }
}

customElements.define('app-media-block', MediaBlock);