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

  get category() {
    return this.#props.category;
  }

  connectedCallback() {
    this.render({ category: this.#props.category });
    this.#addSkillBars();
    this.shadowRoot.querySelector('.toggle-button').addEventListener('click', this.#handleToggle);
  }

  #handleToggle = () => {
    this.shadowRoot.host.toggleAttribute('expanded');

    const eventDetail = { category: this.#props.category };
    this.dispatchEvent(new CustomEvent('skill-category-toggle', { detail: eventDetail, bubbles: true, composed: true }));
  };

  #addSkillBars() {
    const skillsContainer = this.shadowRoot.querySelector('.skills-container');
    this.#props.skills.forEach(skill => {
      const skillBar = new SkillBar(skill);
      skillsContainer.appendChild(skillBar);
      this.#skillBars.push(skillBar);
    });
  }
}

customElements.define('app-skill-category', SkillCategory);