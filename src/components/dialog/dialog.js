import BaseComponent from '../../common/base-component.js';
import template from './dialog-template.js';

export default class Dialog extends BaseComponent {

  #callback;
  #bodyStyleOverflow;

  constructor() {
    super(template);
  }

  connectedCallback() {
    const props = {
      title: this.dataset.title,
      content: this.dataset.content,
      type: this.dataset.type
    };

    this.render(props);

    const buttonElement = this.rootElement.querySelector('#button');
    buttonElement.addEventListener('click', event => {
      event.stopImmediatePropagation();
      this.dismiss();
    });

    const dialog = this.rootElement.querySelector('#dialog');
    dialog.addEventListener('click', event => {
      event.stopImmediatePropagation();
    });

    this.addEventListener('click', event => {
      event.stopImmediatePropagation();
      this.dismiss();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.dismiss();
      }
    });
  }

  show(config, callback) {
    const { title, content, type } = config;
    this.dataset.title = title;
    this.dataset.content = content;
    this.dataset.type = type;

    this.#callback = callback;
    this.#disableScrolling();

    document.body.appendChild(this);
  }

  dismiss() {
    this.remove();
    this.#enableScrolling();
    this.#callback && this.#callback();
  }

  #enableScrolling() {
    document.body.style.overflow = this.#bodyStyleOverflow;
  }

  #disableScrolling() {
    this.#bodyStyleOverflow = document.body.style.overflow; // Save current body overflow style to restore later
    document.body.style.overflow = 'hidden';
  }
}

customElements.define('app-dialog', Dialog);