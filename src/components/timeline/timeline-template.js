import { html, css } from "../../common/utils.js";

const styles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        overflow-y: hidden;
        align-self: start;
    }

    .title {
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .icon {
        font-size: 6rem;
        color: var(--dark-grey);
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 5rem;
    }

    .timeline-item {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .timeline-item__connector {
        flex-basis: 6rem;
        position: relative;
    }

    .timeline-item__connector::before,
    .timeline-item__connector::after {
        content: "";
        display: block;
        background-color: var(--dark-grey);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .timeline-item__connector::before {
        width: 0.2rem;
        height: 150%;
    }

    .timeline-item__connector::after {
        border-radius: 50%;
        width: 0.8em;
        height: 0.8em;
    }

    .timeline-item:hover .timeline-item__connector::after {
        background-color: var(--accent-color);
    }

    .timeline-item__content {
        flex: 1;
        margin-top: -1rem;
    }

    .timeline-item__title {
        color: var(--accent-color);
        font-size: 2.4rem;
        font-weight: bold;
    }

    .timeline-item__date {
        font-size: 1.8rem;
        color: var(--dark-grey);
    }

    .timeline-item__location {
        font-size: 1.8rem;
        color: var(--font-color);
        margin-top: 2rem;
    }
`;

function timelineItemTemplate({ title, date, location }) {
    return html`
        <div class="timeline-item">
            <div class="timeline-item__connector"></div>
            <div class="timeline-item__content">
                <h3 class="timeline-item__title">${title}</h3>
                <p class="timeline-item__date">${date}</p>
                <p class="timeline-item__location">${location}</p>
            </div>
        </div>
    `;
}

export default ({ title, icon, items }) => html`
    <style>${styles}</style>
    <div class="title">
        <app-icon class="icon" name="${icon}" wght="100" color="var(--dark-grey)"></app-icon>
        <h2>${title}</h2>
    </div>
    <div class="items">
        ${items.map(timelineItemTemplate).join("")}
    </div>
`;