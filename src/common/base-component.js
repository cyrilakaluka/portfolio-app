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

    this.rootElement.innerHTML = typeof this.#template === 'function' ? this.#template(props || this.attributesAsObject()) : this.#template;
  }

  attributesAsObject(excludedAttributes = []) {
    const obj = Array.from(this.attributes).filter(attr => !excludedAttributes.includes(attr.name));

    return obj.reduce((acc, attr) => {
      acc[this.#toCamelCase(attr.name)] = attr.value === "" ? true : attr.value;
      return acc;
    }, {});
  }

  addAppThemeChangeListener() {
    document.addEventListener('app-theme-change', this.#handleAppThemeChange);
  }

  removeAppThemeChangeListener() {
    document.removeEventListener('app-theme-change', this.#handleAppThemeChange);
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

  #toCamelCase(str) {
    return str.replace(/-./g, x => x[1].toUpperCase());
  }

  #handleAppThemeChange = (event) => {
    const { theme } = event.detail;
    this.setAttribute('data-theme', theme);
  };
}

export default BaseComponent;