import template from './skills-template.js';
import skills from './data.js';
import BaseComponent from '../../common/BaseComponent.js';
import SkillCategory from './skill-category/skill-category.js';

class Skills extends BaseComponent {
  #skillCategories;

  constructor() {
    super(template);
    this.#skillCategories = [];
  }

  connectedCallback() {
    this.render();
    this.#addSkillCategories();
  }

  #addSkillCategories() {
    const skillCategoriesContainer = this.shadowRoot.querySelector('#skill-categories');
    skills.forEach(category => {
      const skillCategory = new SkillCategory(category);
      skillCategoriesContainer.appendChild(skillCategory);
      this.#skillCategories.push(skillCategory);
    });
  }
}

customElements.define('app-skills', Skills);