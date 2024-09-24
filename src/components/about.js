import React, { useState } from 'react';
import '../css/about.css'; // Ensure your CSS file is linked correctly
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const About = () => {
  const { t } = useTranslation('about'); // Initialize the translation function

  // State to manage the visibility of content for each element
  const [selectedElement, setSelectedElement] = useState(null);

  const handleReadMore = (index) => {
    setSelectedElement(index); // Set the selected element to show detailed content
  };

  const handleBack = () => {
    setSelectedElement(null); // Reset to show all elements
  };

  return (
    <main className="about-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src={`${process.env.PUBLIC_URL}/assets/maintenance.jpg`}
          alt={t('about.sidebarImageAlt')}
          className="sidebar-image"
        />
        <h3>{t('about.missionTitle')}</h3>
        <p>{t('about.missionDescription')}</p>
      </aside>

      {/* Main Section */}
      <section className="content">
        {/* Hero Section */}
        <div className="hero-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/company2.jpeg`}
            alt={t('about.heroImageAlt')}
            className="main-img"
          />
          <div className="hero-text">Towa Denki</div>
        </div>

        {/* About Us Text */}
        <div className="about-text">
          <p>{t('about.aboutText')}</p>
        </div>

        {/* About Heading */}
        <h2 className="about-heading">{t('about.title')}</h2>
        <hr />

        {/* Elements Section */}
        <section className="elements">
          {selectedElement === null ? (
            // Show all elements if no element is selected
            <>
              {/* Element 1 - Our Story */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/story.jpg`} alt={t('about.storyImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.storyTitle')}</h3>
                  <p>{t('about.storyDescription')}</p>
                  <button onClick={() => handleReadMore(1)}>{t('about.readMore')}</button>
                </div>
              </div>

              {/* Element 2 - Our Team */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/coworking.jpg`} alt={t('about.teamImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.teamTitle')}</h3>
                  <p>{t('about.teamDescription')}</p>
                  <button onClick={() => handleReadMore(2)}>{t('about.readMore')}</button>
                </div>
              </div>

              {/* Element 3 - Our Services */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/electrical.jpg`} alt={t('about.servicesImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.servicesTitle')}</h3>
                  <p>{t('about.servicesDescription')}</p>
                  <button onClick={() => handleReadMore(3)}>{t('about.readMore')}</button>
                </div>
              </div>

              {/* Element 4 - Sustainability */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/connectingCable.jpg`} alt={t('about.sustainabilityImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.sustainabilityTitle')}</h3>
                  <p>{t('about.sustainabilityDescription')}</p>
                  <button onClick={() => handleReadMore(4)}>{t('about.readMore')}</button>
                </div>
              </div>

              {/* Element 5 - Our CEO */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/ceo.jpg`} alt={t('about.ceoImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.ceoTitle')}</h3>
                  <p>{t('about.ceoDescription')}</p>
                  <button onClick={() => handleReadMore(5)}>{t('about.readMore')}</button>
                </div>
              </div>

              {/* Element 6 - Our Founder */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/founder.jpg`} alt={t('about.founderImageAlt')} />
                <div className="element-info">
                  <h3>{t('about.founderTitle')}</h3>
                  <p>{t('about.founderDescription')}</p>
                  <button onClick={() => handleReadMore(6)}>{t('about.readMore')}</button>
                </div>
              </div>
            </>
          ) : (
            // Show detailed content based on selected element
            <div className="detail-view">
              {selectedElement === 1 && (
                <>
                  <h3>{t('about.storyTitle')}</h3>
                  <p>{t('about.storyDetail')}</p>
                </>
              )}
              {selectedElement === 2 && (
                <>
                  <h3>{t('about.teamTitle')}</h3>
                  <p>{t('about.teamDetail')}</p>
                </>
              )}
              {selectedElement === 3 && (
                <>
                  <h3>{t('about.servicesTitle')}</h3>
                  <p>{t('about.servicesDetail')}</p>
                </>
              )}
              {selectedElement === 4 && (
                <>
                  <h3>{t('about.sustainabilityTitle')}</h3>
                  <p>{t('about.sustainabilityDetail')}</p>
                </>
              )}
              {selectedElement === 5 && (
                <>
                  <h3>{t('about.ceoTitle')}</h3>
                  <p>{t('about.ceoDetail')}</p>
                </>
              )}
              {selectedElement === 6 && (
                <>
                  <h3>{t('about.founderTitle')}</h3>
                  <p>{t('about.founderDetail')}</p>
                </>
              )}
              <button className='readMoreBtn' onClick={handleBack}>{t('about.backButton')}</button>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default About;
