const css = /*css*/`
  :host {
    position: fixed;
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 100%;
    max-width: inherit;
    padding: 10px 0px;
  }

  .nav-items {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    margin-left: auto;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    list-style: none;
  }

  .nav-link:hover {
    color: var(--accent-color);
  }

  .nav-link a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }

  .phone {
    display: flex;
  }

  .phone-number {
    margin-left: 20px;
    color: var(--accent-color);
  }

  .logo-link {
    width: 50px;
  }
`;
export default () => /*html*/`<style>${css}</style>`;