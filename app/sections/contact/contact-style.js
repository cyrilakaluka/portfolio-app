const css = /*css*/`
  .container {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  .contact-form {
    flex: 1.3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 0.5em;
  }

  .contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  app-icon {
    font-size: 2.4rem;
  }

  .contact:hover app-icon {
    border-color: var(--accent-color);
  }

  .contact .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact .name {
    font-size: 2rem;
  }

  .contact .value {
    opacity: 0.8;
  }

  .email .value {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  .email .value:hover {
    text-decoration: underline;
    color: var(--accent-color);
  }

  .socials-connect {
    margin-top: 2rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  app-social-media {
    font-size: 2.4rem;
  }
`;

export default css;