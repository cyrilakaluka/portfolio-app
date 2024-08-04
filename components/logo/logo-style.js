const css = ({ size }) => /*css*/`
  :host {
    color: var(--accent-color);
    width: ${size || 24}px;
    height: auto;
  }

  a {
    color: inherit;
  }
`;

export default (context) => /*html*/`<style>${css(context)}</style>`;