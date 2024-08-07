import template from './skills-template.js';
import data from './data.js';
import BaseComponent from '../../common/BaseComponent.js';
import './skill-bar/skill-bar.js';

class Skills extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render({ data });
    const skillBar = this.shadowRoot.querySelector('app-skill-bar');
    console.log(skillBar);
    skillBar.skill = data[0].skills[3];
  }
}

customElements.define('app-skills', Skills);