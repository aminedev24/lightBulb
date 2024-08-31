import React from 'react';
//import heroImage from '../assets/hero-image.jpg';
import '../css/hero.css';

const Hero = () => {
  return (
    <section id="home" className="home-section">
      <img src={"assets/electric-tools-table.jpg"} alt="Electrical Maintenance" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Our Electricity Maintenance Company</h1>
        <p>We provide comprehensive services including home appliance installation, electricity leak repairs, troubleshooting, safety inspections, and more!</p>
        <button className="cta-button">Get a Free Quote</button>
      </div>
    </section>
  );
}

export default Hero;
