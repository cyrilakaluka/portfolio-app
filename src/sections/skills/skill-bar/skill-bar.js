import template from './skill-bar-template.js';
import BaseComponent from '../../../common/base-component.js';

export default class SkillBar extends BaseComponent {
  #props;

  constructor(props) {
    super(template);
    this.#props = props;
  }

  connectedCallback() {
    var levelAsPercentage = this.#getLevelAsPercentage(this.#props.level);
    this.render({ levelAsPercentage, ...this.#props });

    super.addAppThemeChangeListener();
  }

  disconnectedCallback() {
    super.removeAppThemeChangeListener();
  }

  #getLevelAsPercentage(levelString) {
    const [level, maxLevel] = levelString.split("/");
    return `${(level / maxLevel) * 100}%`;
  }
}

customElements.define('app-skill-bar', SkillBar);