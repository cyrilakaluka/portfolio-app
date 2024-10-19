import { html } from "../../common/utils.js";
import styles from "./hero-styles.js";

export default ({ resumeLink }) => html`
  <style>${styles}</style>
  <div class="nav-offset"></div>
  <div class="container">
    <div class="grid">
      <div class="media-wrapper">
        <app-media-frame 
          class="media" 
          image-url="./assets/profile_img.jpg"
          image-frame="rounded"
          image-alt="Cyril Akaluka">
        </app-media-frame>
      </div>
      <h3 class="content greeting">Hey there!, I'm</h3>
      <h1 class="content name">Cyril<br>Akaluka</h1>
      <h2 class="content job-role">Full-Stack Developer</h2>
      <p class="content summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facere quod aliquid assumenda accusamus inventore expedita, quos aut doloribus veritatis voluptatibus fugiat corrupti at ad esse perferendis! Adipisci, quas error.
      </p>
      <div class="content buttons">
        <app-cta variant="solid" href="#contact">Hire Me</app-cta>
        <app-cta variant="outline" href="${resumeLink}">Download Resume</app-cta>
      </div>
      <div class="content socials">
        <app-social-media name="LinkedIn" state="expanded"></app-social-media>
        <app-social-media name="Facebook" state="expand-on-hover"></app-social-media>
        <app-social-media name="Twitter" state="expand-on-hover"></app-social-media>
        <app-social-media name="WhatsApp" state="expand-on-hover"></app-social-media>
      </div>
    </div>
  </div>
`;