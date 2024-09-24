import React from 'react';
import '../css/about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <section id="about" className="about-us">
      <h2>{t('about.title')}</h2>
      
      {/* Our Story */}
      <div className="section-container">
        <div className="section-image">
          <img src={`${process.env.PUBLIC_URL}/assets/story.jpg`} alt={t('about.storyImageAlt')} />
        </div>
        <div className="section-text">
          <h2>{t('about.storyTitle')}</h2>
          <p>{t('about.storyDescription')}</p>
        </div>
      </div>
    
      {/* Our Team */}
      <div className="section-container reverse">
        <div className="section-image">
          <img src={`${process.env.PUBLIC_URL}/assets/team.jpg`} alt={t('about.teamImageAlt')} />
        </div>
        <div className="section-text">
          <h2>{t('about.teamTitle')}</h2>
          <p>{t('about.teamDescription')}</p>
        </div>
      </div>
    
      {/* Our Values */}
      <div className="section-container values-container">
        <div className="section-text">
          <h2>{t('about.valuesTitle')}</h2>
          <ul className="values-list">
            <li><strong>{t('about.values.quality.title')}:</strong> {t('about.values.quality.description')}</li>
            <li><strong>{t('about.values.safety.title')}:</strong> {t('about.values.safety.description')}</li>
            <li><strong>{t('about.values.integrity.title')}:</strong> {t('about.values.integrity.description')}</li>
            <li><strong>{t('about.values.customerSatisfaction.title')}:</strong> {t('about.values.customerSatisfaction.description')}</li>
          </ul>
        </div>
        <div className="section-image">
          <img className='value-image' src={`${process.env.PUBLIC_URL}/assets/value.jpg`} alt={t('about.valuesImageAlt')} />
        </div>
      </div>

      {/* Company Profile */}
      <div className="section-container">
        <div className="section-image">
          <img src={`${process.env.PUBLIC_URL}/assets/company2.jpeg`} alt={t('about.companyImageAlt')} />
        </div>
        <div className="section-text">
          <h2>{t('about.companyProfile.title')}</h2>
          <p>{t('about.companyProfile.description')}</p>
        </div>
      </div>
      
      {/* Founder Profile */}
      <div className="section-container reverse">
        <div className="section-image">
          <img src={`${process.env.PUBLIC_URL}/assets/founder.jpg`} alt={t('about.founderImageAlt')} />
        </div>
        <div className="section-text">
          <h2>{t('about.founderProfile.title')}</h2>
          <p>{t('about.founderProfile.description')}</p>
        </div>
      </div>
      
      {/* CEO Profile */}
      <div className="section-container">
        <div className="section-image">
          <img src={`${process.env.PUBLIC_URL}/assets/ceo.jpg`} alt={t('about.ceoImageAlt')} />
        </div>
        <div className="section-text">
          <h2>{t('about.ceoProfile.title')}</h2>
          <p>{t('about.ceoProfile.description')}</p>
        </div>
      </div>
    
      {/* Mission and Vision */}
      <div className="mission-vision-content">
        <div className="mission-vision-item">
          <h2>{t('about.missionTitle')}</h2>
          <p>{t('about.missionDescription')}</p>
          <img src={`${process.env.PUBLIC_URL}/assets/mission.jpg`} alt={t('about.missionImageAlt')} className="mission-vision-image" />
        </div>
        <div className="mission-vision-item">
          <h2>{t('about.visionTitle')}</h2>
          <p>{t('about.visionDescription')}</p>
          <img src={`${process.env.PUBLIC_URL}/assets/vision.jpg`} alt={t('about.visionImageAlt')} className="mission-vision-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
