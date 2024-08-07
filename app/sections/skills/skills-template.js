const css = /*css*/`
  #skill-categories {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export default /*html*/`
  <style>${css}</style>
  <app-section data-title="My Skills">
    <div id="skill-categories"></div>
  </app-section>
`;