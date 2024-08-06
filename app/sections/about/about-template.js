const imageSrc = "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const css = /*css*/`
  :host {
    display: block;
    width: 100%;
  }

  .body {
    color: blue;
  }
`;

export default /*html*/`
  <style>${css}</style>
  <app-section data-title="About Me">
    <app-media-block block-title="About" image-url="${imageSrc}" image-frame="rect" reverse content-size-ratio="1.3">
      <div class="content">
        <div class="introduction"></div>
        <div class="job-role"></div>
        <div class="summary">
          I am a results-driven software engineer with over nine years of experience in designing and implementing robust software solutions. My expertise spans a wide range of programming languages and technologies, including both front-end and back-end development as well as cloud technologies. Throughout my career, I have consistently delivered high-quality, scalable, and maintainable code, making significant contributions to the success of the projects I have been involved in.
        </div>
      </div>
    </app-media-block>
  </app-section>
`;