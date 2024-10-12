import { html, css } from "../../common/utils.js";

/**
 * Generates the css styling for the component
 * @param {Object} props - The template props.
 * @param {string} props.contentSizeRatio - The size ratio of the content part of the media block.
 * @param {boolean} props.reverse - Indicates whether to reverse the order of the media block.
 * @param {string} props.mediaQuery - The media query for the media block.
 * @param {string} props.mediaQueryBehavior - The behavior of the media query.
 * @return {string} returns the generated css style as string.
 */
const styles = ({ contentSizeRatio, reverse, mediaQuery, mediaQueryBehavior }) => css`
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

  .media {
    font-size: 1rem;
  }

  /* Media queries */
  ${generateMediaQueryCss(mediaQuery, mediaQueryBehavior)}
`;

const generateMediaQueryCss = (mediaQuery, mediaQueryBehavior) => {
  if (!mediaQuery) return css``;

  const mediaQueryBehaviorCss = () => {
    switch (mediaQueryBehavior) {
      case 'stack':
        return css`
         :host {
            flex-direction: column;
          }
  
          .media {
            width: 40%;
            min-width: 30rem;
          }
        `;
      case 'hide':
        return css`
          .media {
            display: none;
          }
        `;
      default: throw new Error("Unsupported mediaQueryBehavior");
    }
  };

  return css`
    @media (${mediaQuery}) {
      ${mediaQueryBehaviorCss()}
    }
  `;
};

export default ({ blockTitle, imageUrl, imageFrame, ...rest }) => html`
  <style>${styles(rest)}</style>
  <app-media-frame 
    class="media" 
    image-alt="${blockTitle}" 
    image-frame="${imageFrame}" 
    image-url="${imageUrl}">
  </app-media-frame>
  <slot class="content"></slot>
`;