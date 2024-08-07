import BaseComponent from '../../../common/BaseComponent.js';
import template from './skill-category-template.js';
import SkillBar from '../skill-bar/skill-bar.js';


export default class SkillCategory extends BaseComponent {
  #props;
  #skillBars;

  constructor(props) {
    super(template);
    this.#props = props;
    this.#skillBars = [];
  }

  connectedCallback() {
    this.render({ category: this.#props.category });
    this.#addSkillBars();
  }

  #addSkillBars() {
    const skillsContainer = this.shadowRoot.querySelector('#skills-list');
    this.#props.skills.forEach(skill => {
      const skillBar = new SkillBar(skill);
      skillsContainer.appendChild(skillBar);
      this.#skillBars.push(skillBar);
    });
  }
}

customElements.define('app-skill-category', SkillCategory);