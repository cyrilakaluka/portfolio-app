import cssReset from "./css-reset.js";

const cssResetStyle = new CSSStyleSheet();
cssResetStyle.replaceSync(cssReset);

/**
 * Renders the HTML by combining the template and styles.
 * @element {HTMLElement}
 */
export function renderHtml(element, { template, style, context, ignoreCssReset }) {
  if (!element.shadowRoot) {
    element.attachShadow({ mode: 'open' });
  }

  if (!ignoreCssReset) {
    element.shadowRoot.adoptedStyleSheets = [cssResetStyle];
  }

  const t = typeof template === 'function' ? template(context) : template;
  const s = typeof style === 'function' ? style(context) : style;
  element.shadowRoot.innerHTML = (s || '') + (t || '');
}
