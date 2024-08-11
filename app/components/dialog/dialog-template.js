const css = ({ type }) => /*css*/`
  :host {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 2em;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    justify-content: center;
    padding: 2em 0 1.5em 0;
    background-color: var(--background-color);
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em 0.1em var(--dark-grey);
    animation: entrance 0.3s ease;
    width: 32em;
    max-width: 100%;
  }

  .icon {
    --icon-color: ${type === "success" ? "var(--success-color)" : "var(--error-color)"};
    font-size: 12.8rem;
  }

  .title {
    font-size: 4rem;
    font-weight: 600;
  }

  .content {
    text-align: center;
    font-size: 1.125em;
  }

  .button {
    border: none;
    outline: none;
    background-color: var(--accent-color);
    border-radius: 0.5em;
    padding: 0.75em 1.5em;
    font-size: 1.125em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    opacity: 0.8;
  }

  @keyframes entrance {
    0% {
      transform: scale(0.7);
    }
    45% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default ({ type, title, content, buttonId }) => /*html*/`
  <style>${css({ type })}</style>
  <div id="dialog" class="container">
    <app-icon class="icon" name="${type === "success" ? "check_circle" : "error"}"></app-icon>
    <h2 class="title">${title}</h2>
    <p class="content">${content}</p>
    <button id="button" class="button">Ok</button>
  </div>
`;