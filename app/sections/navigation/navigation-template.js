const css = /*css*/`
  :host {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 100%;
    max-width: inherit;
    height: 80px;
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

export default () => /*html*/`
  <style>${css}</style>
  <app-logo data-size="50" data-href="#home"></app-logo>
  <div class="nav-items">
    <ul class="nav-links">
      <li class="nav-link"><a href="">Home</a></li>
      <li class="nav-link"><a href="">About</a></li>
      <li class="nav-link"><a href="">Resume</a></li>
      <li class="nav-link"><a href="">Contact</a></li>
    </ul>
    <span>|</span>
    <div class="phone">
      <app-icon name="call" fill="1"></app-icon>
      <span class="phone-number">+372 5324 5984</span>
    </div>
  </div>
`;