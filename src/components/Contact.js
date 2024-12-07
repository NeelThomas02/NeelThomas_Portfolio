import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! I’d love to hear from you.</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="contact-socials">
          <h3>Connect with me</h3>
          <a href="https://github.com/NeelThomas02" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/neel-thomas" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:neelthomas.19@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </section>
  );
}
