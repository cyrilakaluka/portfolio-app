import { html, css } from "../../common/utils.js";

const styles = css`
    .timelines {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }
`;

export default () => html`
    <style>${styles}</style>
    <app-section data-title="Resume">
        <div class="timelines">
            <app-timeline data-title="Experience" data-icon="business_center" data-id="experience"></app-timeline>
            <app-timeline data-title="Education" data-icon="school" data-id="education"></app-timeline>
        </div>
    </app-section>
`;