import { html } from '../../common/utils.js';
import styles from './contact-styles.js';

export default ({ contact }) => {
  const { email, phone, address } = contact;
  const { street, city, province, postalCode, country } = address;

  return html`
    <style>${styles}</style>
    <app-section data-title="Contact">
      <div class="container">
        <form id="contact-form" action="#">
          <h2 class="title">Let's Connect</h2>
          <app-form-input type="text" name="name" placeholder="Name" required autocomplete="off" no-shadow></app-form-input>
          <app-form-input type="email" name="email" placeholder="Email" required autocomplete="off" no-shadow></app-form-input>
          <app-form-input type="text" name="subject" placeholder="Subject" required autocomplete="off" no-shadow></app-form-input>
          <app-form-input type="textarea" name="message" placeholder="Message" required rows="5" autocomplete="off" no-shadow></app-form-input>
          <app-cta type="submit" no-shadow>Send</app-cta>
        </form>
        <div class="contact-info">
          <h2 class="title">Contact Info</h2>
          <div class="contacts">
            <div class="email contact">
              <app-icon name="mail"  enframe></app-icon>
              <div class="info">
                <div class="name">Email</div>
                <a href="mailto:${email}" class="value">${email}</a>
              </div>
            </div>
            <div class="phone contact">
              <app-icon name="call" enframe></app-icon>
              <div class="info">
                <div class="name">Phone</div>
                <div class="value">${phone}</div>
              </div>
            </div>
            <div class="address contact">
              <app-icon name="location_on" enframe></app-icon>
              <div class="info">
                <div class="name">Address</div>
                <div class="value">${street}, ${city}, ${province}, ${postalCode}, ${country}</div>
              </div>
            </div>
          </div>
          <div class="socials-connect">
            <div>Visit my social profile and let's get connected</div>
            <div class="socials">
              <app-social-media name="LinkedIn" state="expand-on-hover" color="#0077B5"></app-social-media>
              <app-social-media name="Facebook" state="expand-on-hover" color="#1877F2"></app-social-media>
              <app-social-media name="Twitter" state="expand-on-hover" color="#1DA1F2"></app-social-media>
              <app-social-media name="WhatsApp" state="expand-on-hover" color="#25D366"></app-social-media>
            </div>
          </div>
        </div>
      </div>
    </app-section>
  `;
};