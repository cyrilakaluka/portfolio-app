import template from './timeline-template.js';
import BaseComponent from '../../common/base-component.js';

export default class Timeline extends BaseComponent {
    #timelineItems;

    constructor(items) {
        super(template);
        this.#timelineItems = items || [];
    }

    get dataTitle() {
        return this.getAttribute('data-title');
    }

    get dataIcon() {
        return this.getAttribute('data-icon');
    }

    get items() {
        return this.#timelineItems;
    }

    set items(timelineItems) {
        this.#timelineItems = timelineItems;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const props = {
            title: this.dataTitle,
            icon: this.dataIcon,
            items: this.#timelineItems
        };

        super.render(props);
    }
}

customElements.define('app-timeline', Timeline);