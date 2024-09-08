// Services.jsx
import React from 'react';
import '../css/services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src="assets/switchboard.jpg" alt="Home Appliance Installation" />
          <h3>Home Appliance Installation</h3>
          <p>Professional installation of all types of home appliances with safety and efficiency in mind.</p>
        </div>
        <div className="service-item">
          <img src="assets/connectingCable.jpg" alt="Electricity Leak Repairs" />
          <h3>Electricity Leak Repairs</h3>
          <p>Quick and effective repair services to ensure your home or office is safe from electrical hazards.</p>
        </div>
        <div className="service-item">
          <img src="assets/maintenance.jpg" alt="Troubleshooting Electrical Issues" />
          <h3>Troubleshooting Electrical Issues</h3>
          <p>Identify and resolve all kinds of electrical issues to keep your appliances and systems running smoothly.</p>
        </div>
        <div className="service-item">
          <img src="assets/fixture.jpg" alt="Electrical Fixture Installation" />
          <h3>Electrical Fixture Installation</h3>
          <p>Install and upgrade various electrical fixtures to enhance functionality and aesthetics.</p>
        </div>
       
        <div className="service-item">
          <img src="assets/outdoor.jpg" alt="Outdoor Lighting Installation" />
          <h3>Outdoor Lighting Installation</h3>
          <p>Install outdoor lighting to improve visibility and security around your property.</p>
        </div>
        <div className="service-item">
          <img src="assets/remodeling.jpg" alt="Remodelling" />
          <h3>Remodelling</h3>
          <p>Update and remodel your electrical system to meet new design and functionality needs.</p>
        </div>


            {/* Call to Action Section */}
        <section className="cta-section">
          <h2>Do you need help?</h2>
          <p>Contact us today to schedule a service or get a free quote.</p>
          <a href="#/contact" className="cta-button">
            Contact Us
          </a>
        </section>
      </div>
    </section>
  );
}

export default Services;
