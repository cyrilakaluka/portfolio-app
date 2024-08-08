const css = /*css*/`
  :host {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    gap: 40px;
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
    }

    .toggle-button {
      display: inline-flex;
    }

    .toggle-button .less,
    .skills-container > :nth-child(n+4) {
      display: none;
    }

    :host([expanded]) .toggle-button .less,
    :host([expanded]) .skills-container > :nth-child(n+4) {
      display: block;
    }

    :host([expanded]) .toggle-button .more {
      display: none;
    }
  }
`;

export default ({ category }) => /*html*/`
  <style>${css}</style>
  <h4 class="category">${category}</h4>
  <div class="skills-container"></div>
  <button class="toggle-button">
    <app-icon class="more" name="expand_circle_down"></app-icon>
    <app-icon class="less" name="expand_circle_up"></app-icon>
    <span class="more">Show More</span>
    <span class="less">Show Less</span>
  </button>
`;