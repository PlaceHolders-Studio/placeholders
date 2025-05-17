import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Get in <span className="accent">Touch</span></h2>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <i className="contact-icon">✉️</i>
          <p>
            <a href="mailto:115182776+revalew@users.noreply.github.com">
              115182776+revalew@users.noreply.github.com
            </a>
          </p>
        </div>
        <div className="contact-item">
          <i className="contact-icon">🎮</i>
          <p><a href="https://place-holders.itch.io/" target="_blank" rel="noreferrer">place-holders.itch.io</a></p>
        </div>
        <div className="contact-social">
          <a href="https://github.com/knotfun" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
          <a href="https://place-holders.itch.io/" target="_blank" rel="noreferrer" className="social-link">Itch.io</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;