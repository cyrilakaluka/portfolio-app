const css = ({ fill, wght, grad, opsz, style }) => /*css*/`
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+${style.charAt(0).toUpperCase() + style.slice(1)}:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
  
  .material-symbols-${style} {
    font-variation-settings: 'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${opsz || 24};
    font-size: 1em;
    cursor: default;
    color: var(--icon-color);
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

export default (props) => /*html*/`
  <style>${css(props)}</style>
  <span class="material-symbols-${props.style}">${props.name}</span>
`;