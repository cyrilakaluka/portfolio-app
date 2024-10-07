import { html, css } from "../../common/utils.js";

const styles = css`
    :host {
        padding: 0 2rem;
        text-align: center;
    }
`;

export default () => html`
    <style>${styles}</style>
    <p>&copy; ${new Date().getFullYear()}. Designed by Cyril Akaluka. All Rights Reserved</p>
`;