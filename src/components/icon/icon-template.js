import { html, css } from "../../common/utils.js";

const styles = ({ fill, wght, grad, opsz, color, cursor = 'default' }) => {
  const fontVariationSettings = `'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${opsz || 24}`;
  const iconColor = color || 'var(--icon-color)';

  return css`
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

    .material-symbols-outlined,
    .material-symbols-sharp,
    .material-symbols-rounded {
      font-variation-settings: ${fontVariationSettings};
      font-size: 1em;
      cursor: ${cursor};
      color: ${iconColor};
    }

    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :host([enframe]) {
      border-radius: 100%;
      border: 0.1rem solid var(--dark-grey);
      transition: all 250ms ease-in-out;
      padding: 0.6em;
    }

    :host([enframe]:hover) {
      border-color: var(--accent-color);
    }
  `;
};

export default (props) => {
  return html`
    <style>${styles(props)}</style>
    <span class="material-symbols-${props.style}">${props.name}</span>
  `;
};