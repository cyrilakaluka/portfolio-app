export default  /*html*/`
  <app-media-block block-title="Hero" image-url="./assets/hero.jpg" image-frame="rounded" content-size-ratio="1.5">
    <div class="text">
      <h3 class="greeting">Hey there!, I'm</h3>
      <h1 class="name">Cyril Akaluka</h1>
      <h2 class="role">Full-Stack Developer</h2>
      <p class="summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere quod aliquid assumenda accusamus inventore expedita, quos aut doloribus veritatis voluptatibus fugiat corrupti at ad esse perferendis! Adipisci, quas error.
      </p>
    </div>
    <div class="buttons">
      <app-button variant="solid">Hire Me</app-button>
      <app-button variant="outline">Download Resume</app-button>
    </div>
    <div id="socials" class="socials">
      <app-social-media size="24" name="LinkedIn" behavior="expanded"></app-social-media>
      <app-social-media size="24" name="Facebook" behavior="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="Twitter" behavior="expand-on-hover"></app-social-media>
      <app-social-media size="24" name="WhatsApp" behavior="expand-on-hover"></app-social-media>
    </div>
  </app-media-block>
`;