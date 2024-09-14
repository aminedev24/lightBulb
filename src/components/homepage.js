import React from 'react';
import AnimateOnScroll from './animateOnScroll';
import '../css/homepage.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Home = () => {
  const { t } = useTranslation('home'); // Use the t function for translations

  return (
    <>
      <AnimateOnScroll>
        {/* Hero Section */}
        <section id="home" className="home-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/electricToolsTable.jpg`}
            alt="Electrical Maintenance"
            className="hero-image"
          />
          <div className="hero-content">
            <h1>{t('home.heroTitle')}</h1>
            <p>{t('home.heroDescription')}</p>
            <a href="#/contact" className="cta-button">
              {t('home.ctaButton')}
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-us">
          <h2>{t('home.aboutTitle')}</h2>
          <p className="about-us-text">
            {t('home.aboutDescription')}
          </p>
          <a href="#/about" className="learn-more">
            {t('home.learnMore')}
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="services-preview">
          <h2>{t('home.servicesTitle')}</h2>
          <p>{t('home.servicesDescription')}</p>
          <a href="#/services" className="learn-more">
            {t('home.exploreServices')}
          </a>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="why-choose-us">
          <h2>{t('home.whyChooseUsTitle')}</h2>
          <div className="reasons-container">
            <div className="reason-item">
              <h3>{t('home.expertiseTitle')}</h3>
              <p>{t('home.expertiseDescription')}</p>
            </div>
            <div className="reason-item">
              <h3>{t('home.qualityAssuranceTitle')}</h3>
              <p>{t('home.qualityAssuranceDescription')}</p>
            </div>
            <div className="reason-item">
              <h3>{t('home.customerCentricTitle')}</h3>
              <p>{t('home.customerCentricDescription')}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2>{t('home.featuresTitle')}</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/assets/fast.png`} alt="Feature 1 Icon" />
                <h3>{t('home.fastServiceTitle')}</h3>
                <p>{t('home.fastServiceDescription')}</p>
              </div>
              <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/assets/maintenance.png`} alt="Feature 2 Icon" />
                <h3>{t('home.comprehensiveMaintenanceTitle')}</h3>
                <p>{t('home.comprehensiveMaintenanceDescription')}</p>
              </div>
              <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/assets/customer-support.png`} alt="Feature 3 Icon" />
                <h3>{t('home.supportTitle')}</h3>
                <p>{t('home.supportDescription')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
};

export default Home;
