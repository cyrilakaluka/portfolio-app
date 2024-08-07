import template from './skill-bar-template.js';
import BaseComponent from '../../../common/BaseComponent.js';

class SkillBar extends BaseComponent {
  constructor() {
    super(template);
  }

  /**
   * The skill object.
   * @param {Object} value - The skill object.
   * @param {string} value.name - The name of the skill.
   * @param {string} value.level - The level of the skill expressed as {level}/{max-level}. e.g 3/5.
   * @param {string} value.description - The description of the skill.
   * @param {Object} value.icon - The icon of the skill.
   * @param {string} value.icon.type - The type of the icon.
   * @param {string} value.icon.url - The url of the icon if it's an image.
   * @param {string} value.icon.text - The text of the icon if it's a text.
   * @param {string} value.icon.hexColor - The hex color of the icon if it's a text.
   */
  set skill(value) {
    const levelAsPercentage = `${this.#getLevelPercentage(value.level)}%`;
    const props = { levelAsPercentage, ...value };
    this.render(props);
  }

  connectedCallback() {
    // No-operation
  }

  #getLevelPercentage(levelString) {
    const [level, maxLevel] = levelString.split("/");
    return (level / maxLevel) * 100;
  }
}

customElements.define('app-skill-bar', SkillBar);