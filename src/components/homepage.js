import React, { useEffect, useRef } from 'react';
import '../css/homepage.css';

const Home = () => {
  // Refs for sections
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
        } else {
          entry.target.classList.remove('animate-section'); // Remove animation class when section exits viewport
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observing each section
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="home-section"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
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
          <a href="/contact" className="cta-button">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="about-us"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h2>About Us</h2>
        <p>
          We are a dedicated team of professionals committed to providing
          high-quality electrical maintenance services. With years of
          experience, we ensure the safety and efficiency of your electrical
          systems. Our mission is to deliver reliable and affordable solutions
          for all your electrical needs.
        </p>
        <a href="/about" className="learn-more">
          Learn More About Us
        </a>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="services-preview"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <h2>Our Services</h2>
        <p>
          From home appliance installation to emergency repairs, we offer a wide
          range of services tailored to meet your needs. Our team is equipped to
          handle any electrical issue with professionalism and care.
        </p>
        <a href="/services" className="learn-more">
          Explore Our Services
        </a>
      </section>

      {/* Call to Action Section */}
      <section
        className="cta-section"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <h2>Do you need help?</h2>
        <p>Contact us today to schedule a service or get a free quote.</p>
        <a href="/contact" className="cta-button">
          Contact Us
        </a>
      </section>
    </>
  );
};

export default Home;
