import { css } from "../../common/utils.js";

export default ({ mobileMediaQuerySpec }) => css`
  :host {
    display: flex;
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

  .separator {
    margin: 0 4rem;
  }

  app-link {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }

  app-link.intersecting {
    color: var(--accent-color);
  }

  .nav-extras {
    display: flex;
    align-items: center;
  }

  .phone {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .phone-number {
    color: var(--accent-color);
  }

  .logo {
    width: 12.8rem;
  }

  .menu-toggle {
    display: none;
  }

  .menu-toggle app-icon {
    font-size: 4rem;
  }

  .overlay {
    display: none;
  }

  app-icon {
    font-size: 2.4rem;
  }

  .light,
  :host([data-theme="light"]) .dark,
  :host([data-theme="dark"]) .light {
    display: none;
  }

  .dark,
  :host([data-theme="light"]) .light,
  :host([data-theme="dark"]) .dark {
    display: flex;
  }

  .theme-toggle {
    --theme-toggle-handle-padding: 0.3rem;
    --theme-toggle-icon-size: 1.2rem;
    --theme-toggle-handle-padding: 0.3rem;
    --theme-toggle-handle-size: calc(var(--theme-toggle-icon-size) + var(--theme-toggle-handle-padding) * 2);
    --theme-toggle-width: 4rem;
    --theme-toggle-slider-padding: 0.4rem;

    background: transparent;
    border: 1px solid var(--background-color);
    outline: none;
    cursor: pointer;
    border-radius: 5rem;
    height: 2.2rem;
    width: var(--theme-toggle-width);
    padding: 0;
    box-shadow: 0 0 1.5em 0.1em rgba(0, 0, 0, 0.1);
  }

  .theme-toggle:hover {
    border-color: var(--accent-color);
  }

  .theme-toggle app-icon {
    font-size: var(--theme-toggle-icon-size);
  }

  .theme-toggle-label {
    display: none;
  }

  .theme-toggle-slider {
    display: flex;
    align-items: center;
    padding: var(--theme-toggle-slider-padding);
    width: 100%;
    height: 100%;
    border-radius: 5rem;
    transition: background-color 0.3s;
    background-color: var(--light-grey);
  }

  .theme-toggle-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: margin-left 0.3s;
    background-color: white;
    padding: var(--theme-toggle-handle-padding);
  }

  :host([data-theme="dark"]) .theme-toggle {
    box-shadow: 0 0 4.5em 0.05em rgba(255, 255, 255, 0.8);
  }

  :host([data-theme="dark"]) .theme-toggle-handle {
    margin-left: calc(100% - var(--theme-toggle-handle-size));
    background-color: black;
  }

  :host([data-theme="dark"]) .theme-toggle-slider {
    background-color: var(--dark-grey);
  }

  @media (hover: hover) and (pointer: fine) {
    app-link:hover {
      color: var(--accent-color);
    }
  }

  @media (max-width: 1072px) {
    .phone,
    .nav-extras .separator {
      display: none;
    }
  }

  @media (${mobileMediaQuerySpec}) {
    .separator {
      display: none;
    }

    .nav-items {
      flex-direction: column;
      justify-content: start;
      position: fixed;
      top: 0;
      left: 0;
      margin-top: var(--nav-height);
      padding-bottom: 4rem;
      height: calc(100vh - var(--nav-height));;
      width: clamp(30rem, 60vw, 60rem);
      transform: translateX(-200%);
    }

    .nav-extras {
      flex-direction: column;
      align-items: flex-start;
      gap: 3rem;
      width: 100%;
      padding: 0 2rem;
      margin-top: auto;
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

    .theme-toggle-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
    }

    .theme-toggle-label {
      display: block;
    }
  }
`;
