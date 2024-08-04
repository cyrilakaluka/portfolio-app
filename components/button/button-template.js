export default ({ type }) => /*html*/`
  <button class="button" type="${type || 'button'}">
    <slot></slot>
  </button>
`;