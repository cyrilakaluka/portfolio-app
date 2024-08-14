class BaseComponent extends HTMLElement {
  static cssResetStyleSheet = null;

  #template;
  #options;

  /**
   * @param {Function|string} template - The template to render.
   * @param {Object} options - The options for rendering the HTML.
   * @param {boolean} options.noCssReset - Whether to skip the CSS reset.
   * @param {boolean} options.noShadow - Whether to skip creating a shadow root.
   */
  constructor(template, options = {}) {
    super();
    this.#template = template;
    this.#options = options;
  }

  get rootElement() {
    return this.useShadow ? this.shadowRoot : this;
  }

  get useShadow() {
    return !this.#options.noShadow && !this.hasAttribute('no-shadow');
  }

  /**
   *  @param {Object} props - The props object to be used in the render template
   */
  render(props) {
    this.#attachShadowIfEnabled();
    this.#addCssResetStyleSheetsIfEnabled();

    const htmlString = typeof this.#template === 'function' ? this.#template(props) : this.#template;

    if (this.useShadow) {
      this.shadowRoot.innerHTML = htmlString;
      return;
    }

    this.innerHTML = htmlString;
  }

  #attachShadowIfEnabled() {
    if (this.useShadow && !this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }
  }

  #addCssResetStyleSheetsIfEnabled() {
    if (!this.#options.noCssReset && this.shadowRoot) {
      this.#ensureCssResetStyleSheetInitialization();
      this.shadowRoot.adoptedStyleSheets = [BaseComponent.cssResetStyleSheet];
    }
  }

  #ensureCssResetStyleSheetInitialization() {
    if (BaseComponent.cssResetStyleSheet) return;

    const linkElement = document.querySelector('link#css-reset');
    if (linkElement) {
      for (const sheet of document.styleSheets) {
        if (sheet.href !== linkElement.href) continue;

        const styleSheet = new CSSStyleSheet();
        const cssText = Array.from(sheet.cssRules).map(rule => rule.cssText).join('');
        styleSheet.replaceSync(cssText);
        BaseComponent.cssResetStyleSheet = styleSheet;
        break;
      }
    }

    if (!BaseComponent.cssResetStyleSheet) {
      console.error('No CSS reset stylesheet found');
    }
  }
}

export default BaseComponent;