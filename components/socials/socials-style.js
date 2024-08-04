const css = ({ size, expanded, expandOnHover }) => /*css*/`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css);
  .link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    border: 1px solid #3f4551;
    border-radius: 50px;
    padding: 10px 0px 10px 10px;
    padding-right: ${expanded ? '10px' : 0};
    transition: all 400ms ease;
    font-family: var(--font-family);
    color: var(--font-color);
    overflow: hidden;
  }

  .link:hover {
    padding-right: 10px;
  }

  .link:hover .display-name {
      max-width: ${expanded ? 'none' : expandOnHover ? '128px' : 0};
  }

  .icon {
    font-size: ${size || 32}px;
    color: var(--icon-color);
    display: flex;
    align-items: center;
  }

  .display-name {
    font-weight: bold;
    max-width: ${expanded ? 'none' : 0};
    transition: all 500ms ease;
  }
`;

export default (context) => `<style>${css(context)}</style>`;