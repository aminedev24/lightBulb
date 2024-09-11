import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <section id="about" className="about-us">
    <h2>About Us</h2>
    
    {/* Our Story */}
    <div className="section-container">
    <div className="section-image">
        <img src={`${process.env.PUBLIC_URL}/assets/story.jpg`} alt="Our Story" />
      </div>

      <div className="section-text">
        <h2>Our Story</h2>
        <p>
          Towa Denki was founded on the principles of integrity, hard work, and a passion for solving complex electrical challenges. From our humble beginnings as a small local business, we have grown into a well-known electrical maintenance company renowned for our exceptional craftsmanship and customer service.
        </p>
      </div>

    </div>
  
    {/* Our Team */}
    <div className="section-container reverse">
      <div className="section-image">
        <img src={`${process.env.PUBLIC_URL}/assets/team.jpg`} alt="Our Team" />
      </div>
      <div className="section-text">
        <h2>Our Team</h2>
        <p>
          Our success is driven by our people. Our team is composed of highly skilled and certified electricians who bring years of experience to every project. We believe in continuous learning and stay up-to-date with the latest industry trends and technologies.
        </p>
      </div>
    </div>
  
    {/* Our Values */}
    <div className="section-container values-container">
      <div className="section-text">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li><strong>Quality:</strong> We are committed to delivering the highest quality of work, ensuring that every project we undertake is completed to perfection.</li>
          <li><strong>Safety:</strong> Safety is at the forefront of everything we do. We adhere to strict safety protocols to protect our team, our clients, and their properties.</li>
          <li><strong>Integrity:</strong> We believe in doing the right thing, always. Our transparent and honest approach has earned us the trust of our clients and partners.</li>
          <li><strong>Customer Satisfaction:</strong> Our clients are our top priority. We listen to your needs, provide expert advice, and work tirelessly to ensure your satisfaction.</li>
        </ul>
      </div>
      <div className="section-image">
        <img className='value-image' src={`${process.env.PUBLIC_URL}/assets/value.jpg`} alt="Our Values" />
      </div>
    </div>
  
    {/* Mission and Vision */}
    <div className="mission-vision-content">
      <div className="mission-vision-item">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional electrical services that enhance the safety, functionality, and comfort of our clients’ homes and businesses.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/mission.jpg`} alt="Our Mission" className="mission-vision-image" />
      </div>
      <div className="mission-vision-item">
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading electrical construction company in the region, recognized for our quality workmanship, innovation, and customer service.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/vision.jpg`} alt="Our Vision" className="mission-vision-image" />
      </div>
    </div>
  
  
  </section>
  
  );
};

export default About;
