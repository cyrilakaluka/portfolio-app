const css = /*css*/`
  :host {
    display: block;
    height: 100vh;
  }

  app-media-block {
    height: 100%;
  }

  /* 
   * content section
  */
  .greeting {
    font-size: 32px;
    color: var(--accent-color);
    margin-bottom: 16px;
  }

  .name {
    font-size: 72px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .role {
    font-size: 32px;
    color: var(--accent-color);
    margin-bottom: 16px;
  }

  .summary {
    font-size: 20px;
    opacity: 0.7;
    text-align: justify;
    margin-bottom: 40px;
  }

  .buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
  }

  .socials {
    display: flex;
    gap: 20px;
    width: min-content;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    border: 1px solid #232935;
  }

  .socials:hover {
    border-color: var(--accent-color);
  }

  /* 
   * image section 
  */
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame {
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    border: 10px solid var(--accent-color);
    overflow: hidden;
  }

  .frame::before {
    position: absolute;
    content: '';
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    border: 5px solid var(--background-color);
  }

  .frame > img {
    object-fit: cover;
  }
`;

export default `<style>${css}</style>`;