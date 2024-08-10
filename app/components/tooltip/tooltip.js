import template from './tooltip-template.js';
import BaseComponent from '../../common/base-component.js';

class Tooltip extends BaseComponent {
  constructor() {
    super(template);
  }

  connectedCallback() {
    this.render();
    this.addEventListener('mouseover', this.#showTooltip.bind(this));
    this.addEventListener('mouseout', this.#hideTooltip.bind(this));
  }

  #showTooltip() {
    this.setAttribute('data-show', '');
  }

  #hideTooltip() {
    this.removeAttribute('data-show');
  }
}

customElements.define('app-tooltip', Tooltip);