// About.js
import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to Towa Denki, your trusted partner in all things electrical! 
          With over 10 years of experience in the industry, we specialize in electrical maintenance, 
          home appliance installations, troubleshooting, and safety inspections.
        </p>
        <p>
          Our team of certified professionals is dedicated to delivering top-notch services with 
          the highest standards of safety and efficiency. Whether it's a small repair or a large-scale 
          installation, we ensure your electrical systems are always in safe hands.
        </p>
        <p>
          At Towa Denki, we pride ourselves on our commitment to quality, customer satisfaction, 
          and sustainability. Contact us today to learn more about how we can help you with all your electrical needs.
        </p>
      </div>
      <div className="about-image-container">
        <img src="assets/coworking.jpg" alt="Our Team" />
      </div>
    </section>
  );
};

export default About;
