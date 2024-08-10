import css from './contact-style.js';

export default () => /*html*/`
  <style>${css}</style>
  <app-section data-title="Contact">
    <div class="container">
      <div class="contact-form">
        <h2 class="title">Let's Connect</h2>
        <app-input type="text" name="name" placeholder="Name" required></app-input>
        <app-input type="email" name="email" placeholder="Email" required></app-input>
        <app-input type="text" name="subject" placeholder="Subject" required></app-input>
        <app-input type="textarea" name="message" placeholder="Message" required rows="5"></app-input>
        <app-button type="submit">Submit</app-button>
      </div>
      <div class="contact-info">
        <h2 class="title">Contact Info</h2>
        <div class="contacts">
          <div class="email contact">
            <app-icon name="mail"  enframe></app-icon>
            <div class="info">
              <div class="name">Email</div>
              <a href="mailto:akalukacyril@gmail.com" class="value">akalukacyril@gmail.com</a>
            </div>
          </div>
          <div class="phone contact">
            <app-icon name="call" enframe></app-icon>
            <div class="info">
              <div class="name">Phone</div>
              <div class="value">+1 (343) 882 9369</div>
            </div>
          </div>
          <div class="address contact">
            <app-icon name="location_on" enframe></app-icon>
            <div class="info">
              <div class="name">Address</div>
              <div class="value">90 Woodridge Crescent <br/>K2B7T1 Nepean, Ottawa, Canada</div>
            </div>
          </div>
        </div>
        <div class="socials-connect">
          <div>Connect with me via a social handle of your choice</div>
          <div class="socials">
            <app-social-media name="LinkedIn" state="expand-on-hover"></app-social-media>
            <app-social-media name="Facebook" state="expand-on-hover"></app-social-media>
            <app-social-media name="Twitter" state="expand-on-hover"></app-social-media>
            <app-social-media name="WhatsApp" state="expand-on-hover"></app-social-media>
          </div>
        </div>
      </div>
    </div>
  </app-section>
`;