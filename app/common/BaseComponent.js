class BaseComponent extends HTMLElement {
  static cssResetStyleSheet = null;

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
      this.#ensureCssResetStyleSheetInitialization();
      this.shadowRoot.adoptedStyleSheets = [BaseComponent.cssResetStyleSheet];
    }

    this.shadowRoot.innerHTML = typeof this.$template === 'function' ? this.$template(props) : this.$template;
  }

  #ensureCssResetStyleSheetInitialization() {
    if (!BaseComponent.cssResetStyleSheet) {
      const linkElement = document.querySelector('link#css-reset');
      if (linkElement) {
        for (const sheet of document.styleSheets) {
          if (sheet.href === linkElement.href) {
            const styleSheet = new CSSStyleSheet();
            const cssText = Array.from(sheet.cssRules).map(rule => rule.cssText).join('');
            styleSheet.replaceSync(cssText);
            BaseComponent.cssResetStyleSheet = styleSheet;
            break;
          }
        }
      }
    }

    if (!BaseComponent.cssResetStyleSheet) {
      console.error('No CSS reset stylesheet found');
    }
  }
}

export default BaseComponent;