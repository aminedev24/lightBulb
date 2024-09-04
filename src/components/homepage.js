import React from 'react';
import '../css/homepage.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="home-section">
        <img src={"assets/electric-tools-table.jpg"} alt="Electrical Maintenance" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Our Electricity Maintenance Company</h1>
          <p>We provide comprehensive services including home appliance installation, electricity leak repairs, troubleshooting, safety inspections, and more!</p>
          <button className="cta-button">Get a Free Quote</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>We are a dedicated team of professionals committed to providing high-quality electrical maintenance services. With years of experience, we ensure the safety and efficiency of your electrical systems. Our mission is to deliver reliable and affordable solutions for all your electrical needs.</p>
        <a href="/about" className="learn-more">Learn More About Us</a>
      </section>

      {/* Services Section */}
      <section id="services" className="services-preview">
        <h2>Our Services</h2>
        <p>From home appliance installation to emergency repairs, we offer a wide range of services tailored to meet your needs. Our team is equipped to handle any electrical issue with professionalism and care.</p>
        <a href="/services" className="learn-more">Explore Our Services</a>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Work with Us?</h2>
        <p>Contact us today to schedule a service or get a free quote.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </>
  );
};

export default Home;
