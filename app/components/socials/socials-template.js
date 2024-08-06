const css = ({ size }) => /*css*/`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css);
  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid var(--dark-grey);
    border-radius: 50px;
    padding: 10px;
    transition: all 400ms ease;
    color: var(--font-color);
    overflow: hidden;
  }

  :host([state="expanded"]) .link {
    padding-right: 20px;
  }

  :host([state="expand-on-hover"]) .link,
  :host([state="collapsed"]) .link {
    padding-right: 10px;
  }

  :host([state="expanded"]) .display-name {
    max-width: 128px;
  }

  :host([state="collapsed"]) .display-name,
  :host([state="expand-on-hover"]) .display-name {
    max-width: 0;
  }

  :host([state="expand-on-hover"]) .link:hover {
    padding-right: 20px;
  }

  :host([state="expand-on-hover"]) .link:hover .display-name {
    max-width: 128px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${size || 32}px;
    width: ${size || 32}px;
    aspect-ratio: 1 / 1;
    color: var(--icon-color);
    display: flex;
    align-items: center;
  }

  .display-name {
    position: relative;
    left: 10px;
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
export default (props) => {
  const { name, displayName, href } = props;
  return /*html*/`
  <style>${css(props)}</style>
  <a class="link" href="${href || ''}">
    <i class="icon fa-brands fa-${name}"></i>
    <span class="display-name">${displayName}</span>
  </a>
`;
};