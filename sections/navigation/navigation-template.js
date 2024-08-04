export default () => /*html*/`
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