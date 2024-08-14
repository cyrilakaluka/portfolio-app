import { html, css } from "../../common/utils.js";

const styles = css`
  #skill-categories {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
`;

export default html`
  <style>${styles}</style>
  <app-section data-title="My Skills">
    <div id="skill-categories"></div>
  </app-section>
`;