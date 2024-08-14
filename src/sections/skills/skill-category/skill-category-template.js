import { html, css } from "../../../common/utils.js";

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* variables */
    --row-height: 48px;
    --row-gap: 40px;
    --apparent-height: calc(var(--row-height) + var(--row-gap));
  }

  .category {
    color: var(--accent-color);
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--row-gap);
    grid-auto-rows: var(--row-height);
    transition: max-height 0.5s ease;
    overflow: hidden;
  }

  .toggle-button {
    display: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--accent-color);
    background-color: transparent;
    color: var(--font-color);
    align-self: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
      max-height: calc(var(--apparent-height) * 3);
    }

    .toggle-button {
      display: inline-flex;
    }

    .toggle-button .show-less {
      display: none;
    }

    :host([expanded]) .toggle-button .show-less {
      display: block;
    }

    :host([expanded]) .toggle-button .show-more {
      display: none;
    }

    :host([expanded]) .skills-container {
      max-height: calc(var(--apparent-height) * 10);
    }
  }
`;

export default ({ category }) => html`
  <style>${styles}</style>
  <h4 class="category">${category}</h4>
  <div class="skills-container"></div>
  <button class="toggle-button">
    <app-icon class="show-more" name="expand_circle_down"></app-icon>
    <app-icon class="show-less" name="expand_circle_up"></app-icon>
    <span class="show-more">Show More</span>
    <span class="show-less">Show Less</span>
  </button>
`;