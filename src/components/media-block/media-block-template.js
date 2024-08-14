import { html, css } from "../../common/utils.js";

/**
 * Generates the css styling for the component
 * @param {Object} props - The template props.
 * @param {string} props.contentSizeRatio - The size ratio of the content part of the media block.
 * @param {boolean} props.reverse - Indicates whether to reverse the order of the media block.
 * @return {string} returns the generated css style as string.
 */
const styles = ({ contentSizeRatio, reverse }) => css`
  :host {
    display: flex;
    flex-direction: ${reverse ? 'row-reverse' : 'row'};
    gap: 40px;
  }

  :host > * {
    flex: 1;
  }

  .content {
    display: flex;
    flex-grow: ${contentSizeRatio};
    flex-direction: column;
    justify-content: center;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame {
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 10px solid var(--accent-color);
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

export default ({ blockTitle, imageUrl, imageFrame, contentSizeRatio, reverse }) => html`
  <style>${styles({ contentSizeRatio, reverse })}</style>
  <slot class="content"></slot>
  <div class="image">
    <div class="frame ${imageFrame || 'rounded'}">
      <img src="${imageUrl}" alt="${blockTitle}">
    </div>
  </div>
`;