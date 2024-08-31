import React from 'react';
import '../css/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>Email: contact@electricmaintenance.com</p>
      <p>Phone: +123 456 789</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
