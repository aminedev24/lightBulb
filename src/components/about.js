// AboutUs.jsx
import React from 'react';
import '../css/about.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Us</h1>

      {/* Our Story */}
      <div className="section-container">
        <div className="section-image">
          <img src="assets/story.jpg" alt="Our Story" />
        </div>

        <div className="section-text">
          <h2>Our Story</h2>
          <p>
            Towa Denki was founded on the principles of integrity, hard work, and a passion for solving complex electrical challenges.
            From our humble beginnings as a small local business, we have grown into a well-known electrical maintenance company renowned 
            for our exceptional craftsmanship and customer service. Over the years, we’ve built strong relationships with our clients, many of 
            whom have become repeat customers and have spread positive feedback about our services.
          </p>
        </div>
     
      </div>

      {/* Our Team */}
      <div className="section-container reverse">
        <div className="section-image">
          <img src="assets/team.jpg" alt="Our Team" />
        </div>
        <div className="section-text">
          <h2>Our Team</h2>
          <p>
            Our success is driven by our people. Our team is composed of highly skilled and certified electricians who bring years of experience 
            to every project. We believe in continuous learning and stay up-to-date with the latest industry trends and technologies to ensure that 
            we provide innovative solutions to our clients. Whether it’s a simple installation or a complex electrical system design, our team works 
            with precision and care to deliver results that exceed expectations.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="section-container values-container">
        <div className="section-image">
          <img src="assets/value.jpg" alt="Our Values" />
        </div>
        <div className="section-text">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Quality:</strong> We are committed to delivering the highest quality of work, ensuring that every project we undertake is completed to perfection.</li>
            <li><strong>Safety:</strong> Safety is at the forefront of everything we do. We adhere to strict safety protocols to protect our team, our clients, and their properties.</li>
            <li><strong>Integrity:</strong> We believe in doing the right thing, always. Our transparent and honest approach has earned us the trust of our clients and partners.</li>
            <li><strong>Customer Satisfaction:</strong> Our clients are our top priority. We listen to your needs, provide expert advice, and work tirelessly to ensure your satisfaction.</li>
          </ul>
        </div>
      
      </div>

      {/* Mission and Vision */}
      <div className="mission-vision-content">
        <div className="mission-vision-item">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional electrical services that enhance the safety, functionality, and comfort of our clients’ homes and businesses. 
            We strive to build lasting relationships with our clients by consistently delivering on our promises and exceeding expectations.
          </p>
        </div>
        <div className="mission-vision-item">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading electrical construction company in the region, recognized for our quality workmanship, innovation, and customer service. 
            We aim to continuously expand our services and capabilities, offering cutting-edge solutions that meet the evolving needs of our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
