const css = ({ levelAsPercentage }) => /*css*/`
  @import url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css);

  :host {
    --max-icon-width: 48px;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 100%;
  }

  .image-frame {
    max-width: var(--max-icon-width);
  }

  .icon {
    font-size: var(--max-icon-width);
  }

  .icon-text{
    line-height: 0;
    font-family: var(--icon-text-font-family);
    font-size: 28px;
    max-width: var(--max-icon-width);
  }

  .skill-detail {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 10px solid var(--dark-grey);
  }

  .skill-detail::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: ${levelAsPercentage};
    height: 10px;
    background-color: var(--accent-color);
  }

`;

export default ({ name, levelAsPercentage, description, icon }) => /*html*/`
  <style>${css({ levelAsPercentage })}</style>
  <div class="container" data-tooltip="${description}">
    ${icon.type === "image" ? /*html*/`
        <div class="image-frame">
          <img src="${icon.url}" alt="${name}" />
        </div>
        `: icon.type === "font" ? /*html*/`
        <i class="icon ${icon.class}" style="color: ${icon.color};"></i>
        `:
          /*html*/`
        <div class="icon-text">
          ${icon.text}
        </div>
    `}
    <div class="skill-detail">
      <span class="skill-name">${name}</span>
      <span class="skill-level">${levelAsPercentage}</span>
    </div>
  </div>
`;