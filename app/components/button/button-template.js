const css = /*css*/`
  .button {
    padding: 15px 20px;
    border-radius: 50px;
    font-size: 18px;
    font-family: var(--font-family);
    min-width: 170px;
    transition: transform 0.25s;
    cursor: pointer;
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
    outline: 1px solid var(--accent-color);
    color: var(--font-color);
    background: transparent;
  }

  .button.outline:hover {
    outline-width: 2px;
  }

  .button:active {
    transform: scale(0.95);
  }

  slot {
    color: inherit;
  }
`;

export default ({ type, variant }) => /*html*/`
  <style>${css}</style>
  <button class="button ${variant || 'default'}" type="${type || 'button'}">
    <slot></slot>
  </button>
`;