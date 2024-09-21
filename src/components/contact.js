import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../css/contact.css'; // Ensure you still include this for other styling

const Contact = () => {
  const { t } = useTranslation('contact'); // Use the t function for translations

  return (
    <section id="contact" className="contact-section">
      <img
        src={`${process.env.PUBLIC_URL}/assets/contact.jpg`} // Update the path as needed
        alt="Contact Background"
        className="contact-background"
      />
      <div className="contact-container">
        <h2>{t('contactTitle')}</h2>
        <div className="contact-info">
          <p><img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Email Icon" className="icon" /> {t('contactEmail')}: contact@email.com</p>
          <p><img src={`${process.env.PUBLIC_URL}/assets/phone.png`} alt="Phone Icon" className="icon" /> {t('contactPhone')}: 000-000-0000</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <img src={`${process.env.PUBLIC_URL}/assets/id.png`} alt="Name Icon" className="form-icon" />
            <input type="text" placeholder={t('namePlaceholder')} required />
          </div>
          <div className="form-group">
            <img src={`${process.env.PUBLIC_URL}/assets/email.png`} alt="Email Icon" className="form-icon" />
            <input type="email" placeholder={t('emailPlaceholder')} required />
          </div>
          <div className="form-group">
            <img src={`${process.env.PUBLIC_URL}/assets/message.png`} alt="Message Icon" className="form-icon" />
            <textarea placeholder={t('messagePlaceholder')} required></textarea>
          </div>
          <button type="submit">{t('sendMessageButton')}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
