import template from './input-template.js';
import BaseComponent from '../../common/base-component.js';

class Input extends BaseComponent {
  static errorMessages = {
    required: 'This field is required',
    email: 'Enter a valid email address'
  };

  #inputElement;
  #errorElement;
  #isValid;

  constructor() {
    super(template);
  }

  get type() {
    return this.getAttribute('type');
  }

  get required() {
    return this.hasAttribute('required');
  }

  get name() {
    return this.getAttribute('name');
  }

  get value() {
    return this.#inputElement.value;
  }

  set value(value) {
    this.#inputElement.value = value;
  }

  connectedCallback() {
    this.render(this.#getProps());

    // Initialize input and error elements
    this.#inputElement = this.shadowRoot.querySelector('#input');
    this.#errorElement = this.shadowRoot.querySelector('#error');

    // Add event listeners
    this.#inputElement.addEventListener('input', this.#handleInputEvent);
    this.#inputElement.addEventListener('beforeinput', this.#handleBeforeInputEvent);
    this.#inputElement.addEventListener('focusout', this.#handleFocusoutEvent);
  }

  #getProps() {
    let value = '';
    if (this.type === 'textarea') {
      value = this.shadowRoot.host.innerHTML;
      this.shadowRoot.host.innerHTML = '';
    }
    else {
      value = this.getAttribute('value');
    }

    const props = {
      type: this.type,
      name: this.name,
      value: value,
      required: this.required,
    };

    const combinedProps = { ...this.#getOtherAttributeValues(), ...props };
    return combinedProps;
  }

  #getOtherAttributeValues() {
    const excludedAttributes = ['name', 'type', 'value', 'required'];
    const otherAttributes = Array.from(this.attributes).filter(attr => attr.value && !excludedAttributes.includes(attr.name));

    // return as an object with properties name and value
    return otherAttributes.reduce((acc, attr) => {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  }

  #handleInputEvent = () => {
    if (this.type === 'email')
      this.#validateEmailInput();

    this.dispatchEvent(new CustomEvent('custom-input', {
      detail: {
        name: this.name,
        value: this.value,
        isValid: this.#isValid
      },
      bubbles: true,
      composed: true
    }));
  };

  #handleBeforeInputEvent = (e) => {
    if (this.type === 'number')
      this.#ensureNumericInput();
  };

  #handleFocusoutEvent = () => this.#validateRequired();

  #ensureNumericInput = () => {
    const beforeValue = this.value;
    this.#inputElement.addEventListener(
      "input",
      () => {
        const pattern = /^[0-9]+$/;
        if (this.value && !pattern.test(this.value)) {
          this.value = beforeValue;
        }
      },
      { once: true }
    );
  };

  #validateEmailInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.#updateInputError(!emailPattern.test(this.value), Input.errorMessages.email);
  };

  #validateRequired = () => {
    const isEmpty = !this.value;
    this.#updateInputError(this.required && isEmpty, Input.errorMessages.required);
  };

  #updateInputError = (enabled, message) => {
    this.#inputElement.classList.toggle('error', enabled);
    this.#errorElement.textContent = enabled && message || '';

    this.#isValid = !enabled;
  };
}

customElements.define('app-input', Input);