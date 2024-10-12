import { html, css } from "../../common/utils.js";

const imageSrc = "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .media {
    flex: 1;
    font-size: 1.2rem;
  }

  .content {
    flex: 1.2;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .introduction {
    font-size: 3.2rem;
    font-weight: bold;
  }

  .job-role {
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--accent-color);
  }

  .summary {
    font-size: 1.6rem;
    opacity: 0.7;
  }

  app-button {
    width: max-content;
  }

  @media (max-width: 1024px){
    .container {
      flex-direction: column;
      gap: 4rem;
    }

    .media {
      width: clamp(35rem, 60vw, 60rem);
    }
  }
`;

export default html`
  <style>${styles}</style>
  <app-section class="section" data-title="About Me">
    <div class="container">
      <app-media-frame 
        class="media"
        image-url="${imageSrc}" 
        image-frame="rect"
        image-alt="about me">
      </app-media-frame>
      <div class="content">
        <div class="text">
          <div class="introduction">Hi There! I'm Cyril Akaluka</div>
          <div class="job-role">Full-Stack Developer</div>
          <div class="summary">
            I am a results-driven full-stack developer with over nine years of experience in designing and implementing robust software solutions. My expertise spans a wide range of programming languages and technologies, including both front-end and back-end development as well as cloud technologies. Throughout my career, I have consistently delivered high-quality, scalable, and maintainable code, making significant contributions to the success of the projects I have been involved in.
          </div>
        </div>
        <app-button variant="outline">Download Resume</app-button>
      </div>
    </div>
  </app-section>
`;