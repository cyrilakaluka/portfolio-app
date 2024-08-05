import { cssResetStyleSheet } from "./css-reset.js";

/**
 * Renders the HTML by combining the template and styles.
 * @element {HTMLElement}
 */
export function renderHtml(element, { template, style, context, noCssReset }) {
  if (!element.shadowRoot) {
    element.attachShadow({ mode: 'open' });
  }

  if (!noCssReset) {
    element.shadowRoot.adoptedStyleSheets = [cssResetStyleSheet];
  }

  const t = typeof template === 'function' ? template(context) : template;
  const s = typeof style === 'function' ? style(context) : style;
  element.shadowRoot.innerHTML = (s || '') + (t || '');
}
