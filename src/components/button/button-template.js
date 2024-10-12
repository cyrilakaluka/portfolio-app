import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    display: block;
    min-width: 17rem;
  }

  .button {
    padding: 1.2rem 2rem;
    border-radius: 5rem;
    font-size: 1.8rem;
    font-family: var(--font-family);
    transition: transform 0.25s;
    cursor: pointer;
    width: 100%;
  }

  .button.solid,
  .button.default {
    border: none;
    outline: none;
    color: var(--alt-font-color);
    background: var(--accent-color);
  }

  .button.solid:hover,
  .button.default:hover {
    opacity: 0.9;
  } 

  .button.outline {
    border: none;
    outline: 0.1rem solid var(--accent-color);
    color: var(--font-color);
    background: transparent;
  }

  .button.outline:hover {
    outline-width: 0.2rem;
  }

  .button:active {
    transform: scale(0.95);
  }

  slot {
    color: inherit;
  }
`;

export default ({ type, variant, noShadow, textContent }) => html`
  <style>${styles}</style>
  <button class="button ${variant || 'default'}" type="${type || 'button'}">
    ${noShadow ? textContent : '<slot></slot>'}
  </button>
`;