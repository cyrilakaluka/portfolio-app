import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 100%;
    max-width: inherit;
    height: var(--nav-height);
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
    align-items: center;
  }

  .phone-number {
    margin-left: 20px;
    color: var(--accent-color);
  }

  .logo {
    width: 128px;
  }
`;

export default () => html`
  <style>${styles}</style>
  <app-logo class="logo" data-href="#home"></app-logo>
  <nav class="nav-items">
    <ul class="nav-links">
      <li class="nav-link"><a href="">Home</a></li>
      <li class="nav-link"><a href="">About</a></li>
      <li class="nav-link"><a href="">Resume</a></li>
      <li class="nav-link"><a href="">Contact</a></li>
    </ul>
    <span>|</span>
    <div class="phone">
      <app-icon class="icon" name="call" fill="1" style="font-size: 2.4rem"></app-icon>
      <span class="phone-number">+372 5324 5984</span>
    </div>
  </nav>
`;