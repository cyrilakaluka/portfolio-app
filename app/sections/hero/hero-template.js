const css = /*css*/`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
  }

  .nav-offset {
    min-height: var(--nav-height);
  }

  .content {
    flex: 1;
  }

  /* 
   * content section
  */
  .greeting {
    font-size: 3.2rem;
    color: var(--accent-color);
    margin-bottom: 16px;
  }

  .name {
    font-size: 7.2rem;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }

  .job-role {
    font-size: 3.2rem;
    color: var(--accent-color);
    margin-bottom: 1.6rem;
  }

  .summary {
    font-size: 2rem;
    opacity: 0.7;
    text-align: justify;
    margin-bottom: 4rem;
  }

  .buttons {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }

  .socials {
    display: flex;
    gap: 2rem;
    width: min-content;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5rem;
    border: 0.1rem solid #232935;
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
    border: 1rem solid var(--accent-color);
    overflow: hidden;
  }

  .frame::before {
    position: absolute;
    content: '';
    background-color: transparent;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    border: 0.5rem solid var(--background-color);
  }

  .frame > img {
    object-fit: cover;
  }
`;

export default  /*html*/`
  <style>${css}</style>
  <div class="nav-offset"></div>
  <app-media-block class="content" block-title="Hero" image-url="./assets/hero.jpg" image-frame="rounded" content-size-ratio="1.5">
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
      <app-social-media size="24" name="LinkedIn" state="expanded"></app-social-media>
      <app-social-media size="24" name="Facebook" state="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="Twitter" state="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="WhatsApp" state="expand-on-hover"></app-social-media>
    </div>
  </app-media-block>
`;