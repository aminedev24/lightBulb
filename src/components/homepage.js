import React from 'react';
import AnimateOnScroll from './animateOnScroll';
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

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="reasons-container">
            <div className="reason-item">
              <h3>Expertise & Experience</h3>
              <p>
                Our team consists of highly skilled professionals with years of experience in the electrical industry. We stay updated with the latest industry trends to provide innovative solutions.
              </p>
            </div>
            <div className="reason-item">
              <h3>Quality Assurance</h3>
              <p>
                We are committed to delivering the highest quality of work, ensuring that every project is completed to perfection with strict adherence to safety protocols.
              </p>
            </div>
            <div className="reason-item">
              <h3>Customer-Centric Approach</h3>
              <p>
                Our clients are our top priority. We listen to your needs, provide expert advice, and work tirelessly to ensure your satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section class="features">
          <div class="container">
            <h2>Our Key Features</h2>
            <div class="feature-grid">
              <div class="feature-item">
                <img  src={`${process.env.PUBLIC_URL}/assets/fast.jpg`} alt="Feature 1 Icon" />
                <h3>Fast Service</h3>
                <p>Experience quick and efficient service that meets your needs.</p>
              </div>
              <div class="feature-item">
                <img src={`${process.env.PUBLIC_URL}/assets/shield.png`} alt="Feature 2 Icon" />
                <h3>Secure Transactions</h3>
                <p>Your security is our priority with top-notch protection measures.</p>
              </div>
              <div class="feature-item">
                <img  src={`${process.env.PUBLIC_URL}/assets/customer-support.png`} alt="Feature 3 Icon" />
                <h3>24/7 Support</h3>
                <p>Our support team is available anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </section>


        <section class="testimonials">
          <h2>What Our Clients Say</h2>
          <div class="testimonial-slider">
            <div class="testimonial-item">
              <img src="client1.jpg" alt="Client 1" />
              <p>"Outstanding service! Highly recommended."</p>
              <h4>- John Doe</h4>
            </div>
            <div class="testimonial-item">
              <img src="client2.jpg" alt="Client 2" />
              <p>"Quick, efficient, and reliable. Excellent experience!"</p>
              <h4>- Jane Smith</h4>
            </div>
          </div>
        </section>

      </AnimateOnScroll>
    </>
  );
};

export default Home;
