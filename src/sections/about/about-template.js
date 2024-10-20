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

  .summary p:not(:first-of-type) {
    margin-top: 1.25rem;
  }

  .summary p:not(:last-of-type){
    margin-bottom: 0.5rem;
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

export default ({ resumeLink }) => html`
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
          <div class="job-role">Software Engineer</div>
          <div class="summary">
            <p>I’m a passionate Software Engineer with over 9 years of experience designing and developing high-quality software solutions. Specializing in .NET technologies like C#, ASP.NET, and .NET, I also bring expertise in front-end development with React and Web Components, alongside cloud infrastructure experience with AWS and Azure. My career has been driven by solving complex challenges and building scalable, efficient applications.</p>
            <p>I've led projects from concept to completion, using technologies like Docker and Kubernetes to build modern, containerized solutions. With a strong focus on cloud technologies and DevOps practices, I ensure reliable and continuous software delivery.</p>
            <p>In addition to my technical expertise, I’m passionate about building software that truly meets user needs, and I’m constantly looking for ways to improve both the user experience and the development process. As I move forward in my career, my goal is to create my own business and develop software solutions that I can bring to market, helping others benefit from the technology I build.</p>
            <p>Outside of coding, I love learning about the latest tech trends and exploring new frameworks, always seeking to expand my skill set and keep up with the ever-evolving software landscape.</p>
          </div>
        </div>
        <app-cta variant="outline" href="${resumeLink}">Download Resume</app-cta>
      </div>
    </div>
  </app-section>
`;