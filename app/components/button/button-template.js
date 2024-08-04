export default ({ type, variant }) => /*html*/`
  <button class="button ${variant || 'default'}" type="${type || 'button'}">
    <slot></slot>
  </button>
`;