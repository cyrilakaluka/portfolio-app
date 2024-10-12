import { css } from "../../common/utils.js";

export default css`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100dvh;
    position: relative;
  }

  .nav-offset {
    min-height: var(--nav-height);
  }

  .container {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 4rem 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-auto-rows: min-content;
    align-items: center;
    grid-column-gap: 4rem;
  }

  /* 
   * content section
  */
  .content {
    grid-column: 1 / 2;
  }

  .greeting {
    font-size: 3.2rem;
    color: var(--accent-color);
    margin-bottom: 1.6rem;
  }

  .name {
    font-size: 10rem;
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
    justify-content: space-between;
    width: min-content;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 5rem;
    border: 0.1rem solid #232935;
  }

  .socials:hover {
    border-color: var(--accent-color);
  }

  app-social-media {
    font-size: 2.4rem;
  }

  /*
   * media
  */
  .media-wrapper {
    position: relative;
    grid-column: 2 / 3;
    grid-row: 1 / 999;
    width: 100%;
  }

  .media {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 1.2rem;
  }

  @media (max-width: 1100px) {
    .grid {
      grid-column-gap: 0;
    }

    .media-wrapper {
      grid-row: 1 / 3;
    }

    .content {
      grid-column: 1 / 3;
    }

    .greeting,
    .name {
      grid-column: 1 / 2;
    }

    .media {
      font-size: clamp(0.8rem, 1.2vw, 1.2rem);
    }

    .name {
      font-size: clamp(6rem, 10vw, 10rem);
    }
  }

  @media (max-width: 600px) {
    .container{ 
      padding: 8rem 0;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .content {
      grid-column: 1;
    }

    .media-wrapper {
      justify-self: center;
      grid-column: 1;
      width: 60%;
      margin-bottom: 4rem;
    }

    .media {
      position: static;
    }
  }

  @media (max-width: 460px) {
    .buttons {
      flex-direction: column;
    }

    .socials {
      width: 100%;
    }
  }
`;