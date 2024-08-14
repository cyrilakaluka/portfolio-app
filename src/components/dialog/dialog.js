import BaseComponent from '../../common/base-component.js';
import template from './dialog-template.js';

export default class Dialog extends BaseComponent {

  #callback;
  #bodyStyleOverflow;

  constructor() {
    super(template);

    this.#callback = null;
  }

  connectedCallback() {
    const props = {
      title: this.dataset.title,
      content: this.dataset.content,
      type: this.dataset.type
    };

    this.render(props);

    const buttonElement = this.rootElement.querySelector('#button');
    const dialog = this.rootElement.querySelector('#dialog');

    buttonElement.addEventListener('click', event => {
      event.stopImmediatePropagation();
      this.dismiss();
    });

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
    this.#bodyStyleOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.appendChild(this);
  }

  dismiss() {
    this.remove();
    document.body.style.overflow = this.#bodyStyleOverflow;
    if (this.#callback) {
      this.#callback();
    }
  }
}

customElements.define('app-dialog', Dialog);