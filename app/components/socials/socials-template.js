const css = /*css*/`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css);

  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 0.2rem solid var(--dark-grey);
    border-radius: 5rem;
    padding: 1rem;
    transition: all 400ms ease;
    color: var(--font-color);
    overflow: hidden;
  }

  :host([state="expanded"]) .link {
    padding-right: 2rem;
  }

  :host([state="expand-on-hover"]) .link,
  :host([state="collapsed"]) .link {
    padding-right: 1rem;
  }

  :host([state="expanded"]) .display-name {
    max-width: 12.8rem;
  }

  :host([state="collapsed"]) .display-name,
  :host([state="expand-on-hover"]) .display-name {
    max-width: 0;
  }

  :host([state="expand-on-hover"]) .link:hover {
    padding-right: 2rem;
  }

  :host([state="expand-on-hover"]) .link:hover .display-name {
    max-width: 12.8rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    width: 1em;
    color: var(--icon-color);
    display: flex;
    align-items: center;
  }

  .display-name {
    position: relative;
    left: 1rem;
    font-size: 0.6em;
    line-height: 0;
    font-weight: bold;
    max-width: 0;
    transition: all 500ms ease;
  }
`;

/**
 * Function to display user information.
 * @param {Object} props - The template properties.
 * @param {string} props.name - The name of the FontAwesome icon.
 * @param {string} props.displayName - The display name of the icon.
 * @param {string} props.href - The link to the social media.
 */
export default ({ name, displayName, href }) => {
  return /*html*/`
    <style>${css}</style>
    <a class="link" href="${href || ''}" target="_blank">
      <i class="icon fa-brands fa-${name}"></i>
      <span class="display-name">${displayName}</span>
    </a>
  `;
};