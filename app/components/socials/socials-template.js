export default ({ name, displayName, href }) => /*html*/`
  <a class="link" href="${href || ''}">
    <i class="icon fa-brands fa-${name}"></i>
    <span class="display-name">${displayName}</span>
  </a>
`;