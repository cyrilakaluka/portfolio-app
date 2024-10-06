import template from './form-input-template.js';
import BaseComponent from '../../common/base-component.js';

class FormInput extends BaseComponent {
  static errorMessages = {
    required: (name) => `${name} can not be blank`,
    email: 'Please enter a valid email address'
  };

  #inputElement;
  #errorElement;
  #errors;
  #validators;

  constructor() {
    super(template);
    this.#errors = {};
    this.#validators = [];
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

  get displayName() {
    return this.getAttribute('display-name') || this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  get value() {
    return this.#inputElement.value;
  }

  set value(value) {
    this.#inputElement.value = value;
  }

  get isValid() {
    return Object.keys(this.#errors).length === 0;
  }

  connectedCallback() {
    this.render(this.#getProps());

    // Initialize input and error elements
    this.#inputElement = this.rootElement.querySelector('#input');
    this.#errorElement = this.rootElement.querySelector('#error');

    // Set content of textarea
    if (this.type === 'textarea') {
      this.#setTextareaContent();
    }

    // Add event listeners
    this.#inputElement.addEventListener('input', this.#handleInputEvent);

    if (this.type === 'number')
      this.#inputElement.addEventListener('beforeinput', this.#handleBeforeInputEvent);

    if (this.type === 'email') {
      this.#validators.push(this.#validateEmailInput);
    }

    if (this.required) {
      this.#validators.push(this.#validateRequiredInput);
    }
  }

  validate() {
    this.#validators.forEach((validator) => {
      validator();
    });
  }

  #getProps() {
    const props = {
      type: this.type,
      name: this.name,
      value: this.getAttribute('value'),
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

  #setTextareaContent() {
    this.#inputElement.textContent = this.getAttribute('value');
  }

  #handleInputEvent = () => {
    this.validate();
    this.dispatchEvent(new CustomEvent('app-form-input', {
      detail: {
        name: this.name,
        value: this.value,
        isValid: this.isValid
      },
      bubbles: true,
      composed: true
    }));
  };

  #handleBeforeInputEvent = (e) => {
    if (this.type === 'number')
      this.#ensureNumericInput();
  };

  #validateEmailInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.value && !emailPattern.test(this.value))
      this.#errors.email = FormInput.errorMessages.email;
    else
      delete this.#errors.email;

    this.#updateErrorElement();
  };

  #validateRequiredInput = () => {
    if (!this.value && this.required)
      this.#errors.required = FormInput.errorMessages.required(this.displayName);
    else
      delete this.#errors.required;

    this.#updateErrorElement();
  };

  #updateErrorElement = () => {
    const message = !this.isValid ? this.#errors[Object.keys(this.#errors)[0]] : '';

    this.#inputElement.classList.toggle('error', !this.isValid);
    this.#errorElement.textContent = message;
  };

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
}

customElements.define('app-form-input', FormInput);