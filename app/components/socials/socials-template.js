/**
 * Function to display user information.
 * @param {Object} props - The template properties.
 * @param {string} props.name - The name of the FontAwesome icon.
 * @param {string} props.displayName - The display name of the icon.
 * @param {string} props.href - The link to the social media.
 */
export default ({ name, displayName, href }) => /*html*/`
  <a class="link" href="${href || ''}">
    <i class="icon fa-brands fa-${name}"></i>
    <span class="display-name">${displayName}</span>
  </a>
`;