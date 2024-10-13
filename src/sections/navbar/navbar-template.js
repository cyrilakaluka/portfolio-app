import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    width: 100%;
    max-width: inherit;
    height: var(--nav-height);
  }

  .nav-items {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: center;
    margin-left: auto;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
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
    margin-left: 2rem;
    color: var(--accent-color);
  }

  .logo {
    width: 12.8rem;
  }
`;

export default () => html`
  <style>${styles}</style>
  <a href="#home">
    <app-logo class="logo"></app-logo>
  </a>
  <nav class="nav-items">
    <ul class="nav-links">
      <li class="nav-link"><a href="#home">Home</a></li>
      <li class="nav-link"><a href="#about">About</a></li>
      <li class="nav-link"><a href="#resume">Resume</a></li>
      <li class="nav-link"><a href="#contact">Contact</a></li>
    </ul>
    <span>|</span>
    <div class="phone">
      <app-icon class="icon" name="call" fill="1" style="font-size: 2.4rem"></app-icon>
      <span class="phone-number">+1 (343) 988 6751</span>
    </div>
  </nav>
`;