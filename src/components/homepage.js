// Home.js
import React from 'react';
import AnimateOnScroll from './animateOnScroll'; // Import the new component
import '../css/homepage.css';

const Home = () => {
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
            <h1>Welcome to Towa Denki</h1>
            <p>
              We provide comprehensive services including home appliance
              installation, electricity leak repairs, troubleshooting, safety
              inspections, and more!
            </p>
            <a href="#/contact" className="cta-button">
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-us">
          <h2>About Us</h2>
          <p>
            We are a dedicated team of professionals committed to providing
            high-quality electrical maintenance services. With years of
            experience, we ensure the safety and efficiency of your electrical
            systems. Our mission is to deliver reliable and affordable solutions
            for all your electrical needs.
          </p>
          <a href="#/about" className="learn-more">
            Learn More About Us
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="services-preview">
          <h2>Our Services</h2>
          <p>
            From home appliance installation to emergency repairs, we offer a
            wide range of services tailored to meet your needs. Our team is
            equipped to handle any electrical issue with professionalism and
            care.
          </p>
          <a href="#/services" className="learn-more">
            Explore Our Services
          </a>
        </section>

       
      </AnimateOnScroll>
    </>
  );
};

export default Home;
