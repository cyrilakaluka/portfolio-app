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
      <h2 class="content job-role">Software Engineer</h2>
      <p class="content summary">
      I'm a Software Engineer with 9+ years of experience in building scalable web applications and solving complex problems. Specializing in .NET technologies and cloud solutions, I craft seamless digital experiences. Explore my portfolio, skills, and let's create something amazing together!
      </p>
      <div class="content buttons">
        <app-cta variant="solid" href="#contact" id="hire-me">Hire Me</app-cta>
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