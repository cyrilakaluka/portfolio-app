import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame {
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1em solid var(--accent-color);
    overflow: hidden;
  }

  .frame::before {
    position: absolute;
    content: '';
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 5px solid var(--background-color);
  }

  .frame > img {
    object-fit: cover;
    width: 100%;
  }

  .frame.rounded {
    border-radius: 100%;
  }

  .frame.rounded::before {
    border-radius: 100%;
  }
`;

export default ({ imageAlt, imageUrl, imageFrame }) => html`
  <style>${styles}</style>
  <div class="frame ${imageFrame || 'rounded'}">
    <img src="${imageUrl}" alt="${imageAlt}">
  </div>
`;