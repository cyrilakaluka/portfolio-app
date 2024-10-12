import { html, css } from "../../common/utils.js";

const styles = ({ title }) => css`
  :host {
    display: block;
    padding: 0 4rem;
  }
  .title {
    position: relative;
    color: var(--accent-color);
    font-size: 2.4rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 3.2rem;
    padding: 1.6rem 2rem;
    border-bottom: 4px solid var(--dark-grey);
    text-align: center;
    width: max-content;
    margin: auto;
    margin-bottom: 7.2rem;
  }

  .title::before {
    content: '';
    position: absolute;
    inset: 0;
    bottom: -4px;
    width: max(7rem, 60%);
    border-bottom: 4px solid var(--accent-color);
    left: 50%;
    transform: translateX(-50%)
  }

.title::after {
  position: absolute;
    content: '${title}';
    text-transform: uppercase;
    font-size: 10rem;
    font-weight: bold;
    width: max-content;
    height: max-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--dark-grey);
    z-index: -1;
    opacity: 0.2;
  }

  @media (max-width: 640px){
    .title::after {
      font-size: clamp(5rem, 16vw, 10rem);
    }

    :host {
      padding: 0;
    }
  }
`;

/**
 * @param {Object} props - The template props object.
 * @param {string} props.title - The title of the section.
 */
export default ({ title }) => html`
  <style>${styles({ title })}</style>
  <h2 class="title">${title}</h2>
  <slot></slot>
`;