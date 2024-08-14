import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    margin: auto;
    position: relative;
    display: block;
    width: 100vw;
    max-width: 100%;
  }

  slot {
    width: inherit;
    max-width: inherit;
  }

  .container {
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
  }

  .header {
    position: fixed;
    width: 100%;
    background-color: var(--background-color);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
    z-index: 99999;
  }

  .sections {
    display: flex;
    flex-direction: column;
    gap: 200px;
  }
`;

export default html`
  <style>${styles}</style>
  <header class="header">
    <div class="container">
      <slot name="header"></slot>
    </div>
  </header>
  <main class="container">
    <slot name="hero"></slot>
    <slot class="sections"></slot>
  </main>
`;