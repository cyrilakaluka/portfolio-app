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

  .menu {
    margin-left: auto;
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

  app-link:hover,
  app-link.intersecting {
    color: var(--accent-color);
  }

  app-link {
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

  .menu-toggle app-icon {
    font-size: 4rem;
  }

  .menu-toggle {
    display: none;
  }

  .overlay {
    display: none;
  }

  app-icon {
    font-size: 2.4rem;
  }

  @media (max-width: 1000px){
    .phone,
    .separator {
      display: none;
    }
  }

  @media (max-width: 700px){
    .nav-items {
      flex-direction: column;
      justify-content: start;
      position: fixed;
      top: 0;
      left: 0;
      margin-top: var(--nav-height);
      height: calc(100vh - var(--nav-height));;
      width: clamp(30rem, 60vw, 60rem);
      transform: translateX(-200%);
    }

    .menu.mobile .nav-items {
      transition: transform 0.3s ease-in-out;
    }

    .menu.active .nav-items {
      transform: translateX(0);
    }

    .overlay {
      display: block;
      position: fixed;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -999;
    }

    .nav-items::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--background-color);
      z-index: -99;
    }

    .nav-links {
      flex-direction: column;
      gap: 0;
      width: 100%;
      padding: 0;
    }

    .nav-link {
      padding: 3rem 0;
      border-bottom: 0.1rem solid var(--dark-grey);
      width: 100%;
      text-align: center;
    }

    .phone {
      display: flex;
      padding: 3rem 0;
      margin-top: auto;
    }

    .menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      outline: none;
    }

    .close,
    .menu.active .hamburger {
      display: none;
    }

    .menu.active .close {
      display: block;
    }
  }
`;

export default () => html`
  <style>${styles}</style>
  <app-link href="#home">
    <app-logo class="logo"></app-logo>
  </app-link>
  <div class="menu">
    <nav class="nav-items">
      <ul class="nav-links">
        <li class="nav-link"><app-link href="#home">Home</app-link></li>
        <li class="nav-link"><app-link href="#about">About</app-link></li>
        <li class="nav-link"><app-link href="#skills">Skills</app-link></li>
        <li class="nav-link"><app-link href="#resume">Resume</app-link></li>
        <li class="nav-link"><app-link href="#contact">Contact</app-link></li>
      </ul>
      <span class="separator">|</span>
      <div class="phone">
        <app-icon class="icon" name="call" fill="1"></app-icon>
        <span class="phone-number">+1 (343) 988 6751</span>
      </div>
      <div class="overlay"></div>
    </nav>
    <button class="menu-toggle">
      <app-icon class="hamburger" name="menu"></app-icon>
      <app-icon class="close" name="close"></app-icon>
    </button>
  </div>
`;