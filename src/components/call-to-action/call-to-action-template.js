import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    display: block;
  }

  .cta {
    padding: 1.2rem 2rem;
    border-radius: 5rem;
    font-size: 1.8rem;
    font-family: var(--font-family);
    transition: transform 0.25s;
    cursor: pointer;
    min-width: 17rem;
  }

  .cta.solid,
  .cta.default {
    border: none;
    outline: none;
    color: var(--alt-font-color);
    background: var(--accent-color);
  }

  .cta.solid:hover,
  .cta.default:hover {
    opacity: 0.9;
  } 

  .cta.outline {
    border: none;
    outline: 0.1rem solid var(--accent-color);
    color: var(--font-color);
    background: transparent;
  }

  .cta.outline:hover {
    outline-width: 0.2rem;
  }

  .cta:active {
    transform: scale(0.95);
  }

  slot {
    color: inherit;
  }

  a {
    text-decoration: none;
  }
`;

function renderButton({ type, variant, noShadow, textContent }) {
  return html`
    <button class="cta ${variant || 'default'}" type="${type || 'button'}">
      ${noShadow ? textContent : '<slot></slot>'}
    </button>
  `;
}

function renderLink({ href, variant, noShadow, textContent }) {
  return html`
    <a class="cta ${variant || 'default'}" href="${href}">
      ${noShadow ? textContent : '<slot></slot>'}
    </a>
  `;
}

export default (props) => html`
  <style>${styles}</style>
  ${props.href ? renderLink(props) : renderButton(props)}
`;