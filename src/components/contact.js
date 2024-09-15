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
        <p>{t('contactEmail')}: contact@email.com</p>
        <p>{t('contactPhone')}: 000-000-0000</p>
        <form className="contact-form">
          <input type="text" placeholder={t('namePlaceholder')} required />
          <input type="email" placeholder={t('emailPlaceholder')} required />
          <textarea placeholder={t('messagePlaceholder')} required></textarea>
          <button type="submit">{t('sendMessageButton')}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
