export default /*html*/`
  <style>
    :host {
      margin: auto;
      position: relative;
      display: block;
      width: 100%;
      max-width: 1200px;
      padding-left: 20px;
      padding-right: 20px;
    }
    slot {
      width: inherit;
      max-width: inherit;
    }
  </style>
  <slot></slot>
`;