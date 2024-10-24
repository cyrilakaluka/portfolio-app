import { html, css } from "../../common/utils.js";

const styles = css`
  :host {
    --input-border-color: #d1d5db;
  }

  :host([data-theme="dark"]),
  [data-theme="dark"] {
    --input-border-color: #232935;
  }

  .form-input {
    padding: 1.2rem 2rem;
    border: 1px solid var(--input-border-color);
    border-radius: 0.7rem;
    width: 100%;
    outline: none;
    background-color: var(--alt-background-color);
    color: var(--font-color);
    transition: all 0.3s ease;
  }

  .form-input:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 1px var(--accent-color);
  }

  .form-input.error {
    border-color: var(--error-color);
  }

  #form-error {
    color: var(--error-color);
    font-size: 1.4rem;
    margin-top: 1.5rem;
    min-height: 1em;
    line-height: 0;
    transition: all 0.3s ease;
  }
`;

const error = html`<div id="form-error"></div>`;

const renderInput = ({ type, ...rest }) => {
  const inputMode = type === 'number' ? 'numeric' : type === 'email' ? 'email' : 'text';
  const propsAsString = getPropsAsString(rest) + ` inputmode="${inputMode}"`;

  return html`
    <input class="form-input" type="text" ${propsAsString}/>
    ${error}
  `;
};

const renderTextarea = ({ value, ...rest }) => {
  const propsAsString = getPropsAsString(rest);
  return html`
    <textarea class="form-input" ${propsAsString} style="resize: none;">${value}</textarea>
    ${error}
  `;
};

function getPropsAsString(props) {
  return Object.keys(props).map(key => {
    if (typeof props[key] === 'boolean')
      return props[key] ? key : '';
    else
      return `${key}="${props[key] || ''}"`;
  }).join(' ');
}

export default (props) => html`
    <style>${styles}</style>
    ${props.type === "textarea" ? renderTextarea(props) : renderInput(props)}
`;