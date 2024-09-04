import React from 'react';
//import serviceImage1 from '../assets/service-image1.jpg';
//import serviceImage2 from '../assets/service-image2.jpg';
//import serviceImage3 from '../assets/service-image3.jpg';
import '../css/services.css';
const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src={"/assets/switchboard.jpg"} alt="Home Appliance Installation" />
          <h3>Home Appliance Installation</h3>
          <p>Professional installation of all types of home appliances with safety and efficiency in mind.</p>
        </div>
        <div className="service-item">
          <img src={"/assets/connectingCable.jpg"} alt="Electricity Leak Repairs" />
          <h3>Electricity Leak Repairs</h3>
          <p>Quick and effective repair services to ensure your home or office is safe from electrical hazards.</p>
        </div>
        <div className="service-item">
          <img src={"/assets/maintenance.jpg"} alt="Troubleshooting Electrical Issues" />
          <h3>Troubleshooting Electrical Issues</h3>
          <p>Identify and resolve all kinds of electrical issues to keep your appliances and systems running smoothly.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
