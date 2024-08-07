const css = /*css*/`
  :host {
    display: inline-block;
    position: relative;
  }

  :host::after {
    content: attr(data-tooltip);
    position: absolute;
    background: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  :host:hover::after {
    opacity: 1;
  }
`;

export default /*html*/`
  <style>${css}</style>
  <slot></slot>
`;