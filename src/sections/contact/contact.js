import template from './contact-template.js';
import BaseComponent from '../../common/base-component.js';
import Dialog from '../../components/dialog/dialog.js';
import { html } from '../../common/utils.js';

class Contact extends BaseComponent {
  #publicAccessKey = "086e1a0e-e4ea-45c5-b678-2a3ef2d23c9c";
  #contact = {
    email: "akalukacyril@gmail.com",
    phone: "+1 (343) 882 9369",
    address: {
      street: "90 Woodridge Crescent",
      city: "Nepean",
      province: "Ontario",
      postalCode: "K2B7T1",
      country: "Canada"
    }
  };
  #formElement;
  #formInputElements;
  #dialog;

  constructor() {
    super(template);
    this.#formInputElements = [];
    this.#dialog = new Dialog();
  }

  connectedCallback() {
    this.render({ contact: this.#contact });

    this.#formInputElements = Array.from(this.shadowRoot.querySelectorAll('app-form-input'));
    this.#formElement = this.shadowRoot.querySelector('#contact-form');
    this.#formElement.addEventListener('submit', this.#handleFormSubmit);
  }

  #handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!this.#isValidFormInputs()) {
      return;
    }

    const formData = new FormData(this.#formElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    const sendParams = {
      email: this.#contact.email,
      name: data.name,
      message: this.#generateFormattedBody(data)
    };

    const message = await this.#send(sendParams);

    if (message === "OK") {
      this.#showSuccessDialog();
    } else {
      this.#showErrorDialog(message);
    };
  };

  #showSuccessDialog = () => {
    const dialogParams = {
      title: "Success",
      content: "Your message has been sent successfully.",
      type: "success"
    };

    this.#dialog.show(dialogParams, () => this.#formElement.reset());
  };

  #showErrorDialog = (message) => {
    const dialogParams = {
      title: "Error",
      content: message,
      type: "error"
    };

    this.#dialog.show(dialogParams);
  };

  #isValidFormInputs = () => {
    for (const input of this.#formInputElements) {
      input.validate();
    }

    return this.#formInputElements.every(input => input.isValid);
  };

  #generateFormattedBody({ name, email, subject, message }) {
    return html`
      <p>Subject: ${subject} - Form Submission from ${name} (${email})</p>
      <p>Dear Cyril,</p>
      <p>You have received a new message from your website's contact form. Here are the details:</p>
      <p>
        <b>Name:</b> ${name}<br/>
        <b>Email:</b> ${email}<br/>
        <b>Subject:</b> ${subject}<br/>
        <b>Message:</b><br/>
        ${message}
      </p>
      <p>Best regards,<br/>Your Website Contact Form</p>
    `;
  }

  async #send({ name, email, message }) {
    const url = 'https://api.web3forms.com/submit';
    const body = {
      access_key: this.#publicAccessKey,
      name,
      email,
      message
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      return "OK";
    }

    const data = await response.json();
    return data.message || 'Something went wrong. Please try again later.';
  }
}

customElements.define('app-contact', Contact);