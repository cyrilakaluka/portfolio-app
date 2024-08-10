import template from './skills-template.js';
import skillCategories from './data.js';
import BaseComponent from '../../common/base-component.js';
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
    this.addEventListener('skill-category-toggle', this.#handleSkillCategoryToggle);
  }

  #handleSkillCategoryToggle = (event) => {
    this.#skillCategories.forEach(x => {
      if (x.category !== event.detail.category) {
        x.removeAttribute('expanded');
      }
    });
  };

  #addSkillCategories() {
    const skillCategoriesContainer = this.shadowRoot.querySelector('#skill-categories');

    skillCategories.forEach(category => {
      const skillCategory = new SkillCategory(category);
      skillCategoriesContainer.appendChild(skillCategory);
      this.#skillCategories.push(skillCategory);
    });
  }
}

customElements.define('app-skills', Skills);