import template from "./footer-template.js";
import BaseComponent from "../../common/base-component.js";

export default class Footer extends BaseComponent {
    constructor() {
        super(template);
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('app-footer', Footer);