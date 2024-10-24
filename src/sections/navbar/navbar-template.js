import { html } from "../../common/utils.js";
import styles from "./navbar-styles.js";

function renderThemeToggle() {
  return html`
    <div class="theme-toggle-wrapper">
      <span class="theme-toggle-label">Switch theme</span>
      <button class="theme-toggle">
        <div class="theme-toggle-slider">
          <div class="theme-toggle-handle">
            <app-icon class="dark" name="dark_mode" cursor="pointer"></app-icon>
            <app-icon class="light" name="light_mode" cursor="pointer"></app-icon>
          </div>
        </div>
      </button>
    </div>
`;
}

function renderNavLinks() {
  return html`
    <ul class="nav-links">
      <li class="nav-link"><app-link href="#home">Home</app-link></li>
      <li class="nav-link"><app-link href="#about">About</app-link></li>
      <li class="nav-link"><app-link href="#skills">Skills</app-link></li>
      <li class="nav-link"><app-link href="#resume">Resume</app-link></li>
      <li class="nav-link"><app-link href="#contact">Contact</app-link></li>
    </ul>`;
}

function renderMenuToggle() {
  return html`
    <button class="menu-toggle">
      <app-icon class="hamburger" name="menu"></app-icon>
      <app-icon class="close" name="close"></app-icon>
    </button>`;
}

export default ({ phone, ...rest }) => html`
  <style>${styles(rest)}</style>
  <app-link href="#home">
    <app-logo class="logo"></app-logo>
  </app-link>
  <div class="menu">
    <nav class="nav-items">
      ${renderNavLinks()}
      <span class="separator">|</span>
      <div class="nav-extras">
        <div class="phone">
          <app-icon class="icon" name="call" fill="1"></app-icon>
          <span class="phone-number">${phone}</span>
        </div>
        <span class="separator">|</span>
        ${renderThemeToggle()}
      </div>
      <div class="overlay"></div>
    </nav>
    ${renderMenuToggle()}
  </div>
`;