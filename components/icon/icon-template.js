const css = ({ size, fill, wght, grad, opsz }) => /*css*/`
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
  .material-symbols-outlined {
    font-variation-settings: 'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${opsz || 24};
    width: ${size || 24}px;
    height: ${size || 24}px;
    cursor: default;
    color: var(--icon-color);
  }
  .frame {
    border-radius: 100%;
    border: 1px solid #3f4551;
    padding: 10px;
    transition: border-color 250ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame:hover {
    border-color: var(--accent-color);
  }
`;

export default ({ name, size, fill, wght, grad, opsz, enframe }) => /*html*/`
  <style>${css({ size, fill, wght, grad, opsz })}</style>
  ${enframe && `<div class="frame">` || ''}
    <span class="material-symbols-outlined">${name}</span>
  ${enframe && `</div>` || ''}
`;