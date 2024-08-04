const css = /*css*/`
  :host {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  :host > * {
    flex: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .greeting {
    color: var(--accent-color);
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .name {
    font-size: 128px;
    margin-bottom: 20px;
  }

  .role {
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 40px;
    opacity: 0.7;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image-container > img {
    object-fit: cover;
  }
`;

export default `<style>${css}</style>`;