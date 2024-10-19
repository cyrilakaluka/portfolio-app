import template from "./about-template.js";
import BaseComponent from "../../common/base-component.js";
import ResumeStore from "../../store/resume.js";

class AboutMe extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render({
      resumeLink: ResumeStore.getDownloadLink()
    });
  }
}

customElements.define('app-about-me', AboutMe);