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
  }
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .skill {
    display: none;
  }
  .skill.visible {
    display: block;
  }
  #toggle-button {
    display: inline-flex;
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
    .skills {
      grid-template-columns: 1fr;
    }
    .skill {
      display: block;
    }
    .skill.hidden {
      display: none;
    }
  }
`;

export default ({ category }) => /*html*/`
  <style>${css}</style>
  <h4 class="category">${category}</h4>
  <div id="skills-list" class="skills">
  </div>
  <button id="toggle-button">
    <app-icon class="more" name="expand_circle_down"></app-icon>
    <app-icon class="less" name="expand_circle_up"></app-icon>
    <span class="more">Show More</span>
    <span class="less">Show Less</span>
  </button>
`;