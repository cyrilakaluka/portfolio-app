import template from './resume-template.js';
import BaseComponent from '../../common/base-component.js';

export default class Resume extends BaseComponent {
    #timelineItems = {
        education: [
            {
                title: "MSc. Computer & Systems Engineering",
                date: "September 2016 - June 2018",
                location: "Tallinn University of Technology"
            },
            {
                title: "B.Eng Electronics and Computer Engineering",
                date: "November 2006 - November 2011",
                location: "Federal University of Technology Owerri"
            }
        ],
        experience: [
            {
                title: "Fullstack Software Engineer",
                date: "March 2022 - Present",
                location: "Games Global, Tallinn, Estonia"
            },
            {
                title: "Software Engineer",
                date: "March 2018 - March 2022",
                location: "Ericsson, Tallinn, Estonia"
            },
            {
                title: "Web Developer",
                date: "November 2013 - June 2016",
                location: "Current Link Systems, Abuja, Nigeria"
            }
        ]
    };

    constructor() {
        super(template);
    }

    connectedCallback() {
        this.render();

        Array.from(this.shadowRoot.querySelectorAll('app-timeline')).forEach(timeline => {
            timeline.items = this.#timelineItems[timeline.dataset.id];
        });
    }
}

customElements.define('app-resume', Resume);