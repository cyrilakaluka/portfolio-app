import { cssResetStyleSheet } from "./css-reset.js";

/**
 * Renders the HTML by combining the template and styles.
 * @param {HTMLElement} element - The element to render the HTML into.
 * @param {Object} options - The options for rendering the HTML.
 * @param {Function|string} options.template - The template to render.
 * @param {Function|string} options.style - The style to render.
 * @param {Object} options.context - The context to use when rendering the template and style.
 * @param {boolean} options.noCssReset - Whether to skip the CSS reset.
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
