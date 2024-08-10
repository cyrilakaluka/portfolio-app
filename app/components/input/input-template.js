const css = /*css*/`
  :host {
    --input-background-color: #101624;
    --input-border-color: #232935;
  }

  #input {
    padding: 1.2rem 2rem;
    border: 1px solid var(--input-border-color);
    border-radius: 0.7rem;
    width: 100%;
    outline: none;
    background-color: var(--input-background-color);
    color: var(--font-color);
    transition: all 0.4s ease;
  }

  #input:focus {
    border-color: var(--accent-color);
  }

  #input.error {
    border-color: var(--error-color);
  }

  #error {
    color: var(--error-color);
    font-size: 1.4rem;
    margin-top: 1.5rem;
    min-height: 1em;
    line-height: 0;
    transition: all 0.4s ease;
  }
`;

const input = ({ type, ...rest }) => {
  const inputMode = type === 'number' ? 'numeric' : type === 'email' ? 'email' : 'text';
  const propsAsString = getPropsAsString(rest) + ` inputmode="${inputMode}"`;

  return /*html*/`
    <input id="input" type="text" ${propsAsString}/>
    ${error()}
  `;
};

const textarea = ({ value, ...rest }) => {
  const propsAsString = getPropsAsString(rest);
  return /*html*/`
    <textarea id="input" ${propsAsString} style="resize: none;">${value}</textarea>
    ${error()}
  `;
};

const error = () => /*html*/`
  <div id="error"></div>
`;

function getPropsAsString(props) {
  return Object.keys(props).map(key => {
    if (typeof props[key] === 'boolean')
      return props[key] ? key : '';
    else
      return `${key}="${props[key] || ''}"`;
  }).join(' ');
}

export default (props) => /*html*/`
    <style>${css}</style>
    ${props.type === "textarea" ? textarea(props) : input(props)}
`;