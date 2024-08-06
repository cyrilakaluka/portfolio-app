const css = /*css*/`
  :host {
    display: block;
    height: calc(100vh - var(--nav-height));
  }

  :host::before {
    content: '';
    display: block;
    height: var(--nav-height);
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

  .job-role {
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

export default  /*html*/`
  <style>${css}</style>
  <app-media-block block-title="Hero" image-url="./assets/hero.jpg" image-frame="rounded" content-size-ratio="1.5">
    <div class="text">
      <h3 class="greeting">Hey there!, I'm</h3>
      <h1 class="name">Cyril Akaluka</h1>
      <h2 class="job-role">Full-Stack Developer</h2>
      <p class="summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere quod aliquid assumenda accusamus inventore expedita, quos aut doloribus veritatis voluptatibus fugiat corrupti at ad esse perferendis! Adipisci, quas error.
      </p>
    </div>
    <div class="buttons">
      <app-button variant="solid">Hire Me</app-button>
      <app-button variant="outline">Download Resume</app-button>
    </div>
    <div class="socials">
      <app-social-media size="24" name="LinkedIn" behavior="expanded"></app-social-media>
      <app-social-media size="24" name="Facebook" behavior="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="Twitter" behavior="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="WhatsApp" behavior="expand-on-hover"></app-social-media>
    </div>
  </app-media-block>
`;