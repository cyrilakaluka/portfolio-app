const css = ({ size }) => /*css*/`
  :host {
    width: ${size || 24}px;
    height: auto;
  }

  a {
    color: var(--accent-color);
  }
`;

export default (context) => /*html*/`<style>${css(context)}</style>`;