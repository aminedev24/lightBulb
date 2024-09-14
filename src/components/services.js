import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/services.css';

const Services = () => {
  const { t } = useTranslation('services'); // Load translations for the services namespace

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-description">{t('services.description')}</p>
        <div className="services-grid">
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/switchboard.jpg`} alt={t('services.items.homeApplianceInstallation.title')} />
            <div className="service-info">
              <h3>{t('services.items.homeApplianceInstallation.title')}</h3>
              <p>{t('services.items.homeApplianceInstallation.description')}</p>
            </div>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/connectingCable.jpg`} alt={t('services.items.electricityLeakRepairs.title')} />
            <div className="service-info">
              <h3>{t('services.items.electricityLeakRepairs.title')}</h3>
              <p>{t('services.items.electricityLeakRepairs.description')}</p>
            </div>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/maintenance.jpg`} alt={t('services.items.troubleshootingElectricalIssues.title')} />
            <div className="service-info">
              <h3>{t('services.items.troubleshootingElectricalIssues.title')}</h3>
              <p>{t('services.items.troubleshootingElectricalIssues.description')}</p>
            </div>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/fixture.jpg`} alt={t('services.items.electricalFixtureInstallation.title')} />
            <div className="service-info">
              <h3>{t('services.items.electricalFixtureInstallation.title')}</h3>
              <p>{t('services.items.electricalFixtureInstallation.description')}</p>
            </div>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/outdoor.jpg`} alt={t('services.items.outdoorLightingInstallation.title')} />
            <div className="service-info">
              <h3>{t('services.items.outdoorLightingInstallation.title')}</h3>
              <p>{t('services.items.outdoorLightingInstallation.description')}</p>
            </div>
          </div>
          <div className="service-card">
            <img src={`${process.env.PUBLIC_URL}/assets/remodeling.jpg`} alt={t('services.items.remodeling.title')} />
            <div className="service-info">
              <h3>{t('services.items.remodeling.title')}</h3>
              <p>{t('services.items.remodeling.description')}</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <h2>{t('services.cta.title')}</h2>
          <p>{t('services.cta.description')}</p>
          <a href="#/contact" className="cta-button">
            {t('services.cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
