import { html, css } from "../../common/utils";

const styles = css`
  .link {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default ({ href }) => html`
  <style>${styles}</style>
  <a class="link" href="${href}">
    <slot></slot>
  </a>
`;