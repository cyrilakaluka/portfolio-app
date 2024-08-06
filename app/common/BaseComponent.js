import { cssResetStyleSheet } from './css-reset.js';

class BaseComponent extends HTMLElement {
  /**
   * @param {Function|string} template - The template to render.
   * @param {Function|string} style - The style to render.
   * @param {Object} options - The options for rendering the HTML.
   * @param {boolean} options.noCssReset - Whether to skip the CSS reset.
   * @param {boolean} options.noShadow - Whether to skip creating a shadow root.
   */
  constructor(template, options = {}) {
    super();
    this.$template = template;
    this.$options = options;

    if (!options.noShadow)
      this.attachShadow({ mode: 'open' });
  }

  /**
   *  @param {Object} props - The props object to be used in the render template
   */
  render(props) {
    if (!this.$options.noCssReset) {
      this.shadowRoot.adoptedStyleSheets = [cssResetStyleSheet];
    }

    this.shadowRoot.innerHTML = typeof this.$template === 'function' ? this.$template(props) : this.$template;
  }
}

export default BaseComponent;