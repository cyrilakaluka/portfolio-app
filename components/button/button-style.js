const css = /*css*/`
  .button {
    background-color: var(--accent-color);
    padding: 15px 20px;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 18px;
    font-family: var(--font-family);
    min-width: 170px;
    transition: transform 0.25s;
  }

  .button:active {
    transform: scale(0.9);
  }
`;

export default /*html*/`<style>${css}</style>`;