import React, { useState } from 'react';
import '../css/about.css'; // Ensure your CSS file is linked correctly

const About = () => {
  // State to manage the visibility of content for each element
  const [selectedElement, setSelectedElement] = useState(null);

  const handleReadMore = (index) => {
    setSelectedElement(index); // Set the selected element to show detailed content
  };

  const handleBack = () => {
    setSelectedElement(null); // Reset to show all elements
  };

  return (
    <main className="about-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src={`${process.env.PUBLIC_URL}/assets/maintenance.jpg`}
          alt="Sidebar Image"
          className="sidebar-image"
        />
        <h3>Our Mission</h3>
        <p>
          We aim to provide top-quality electrical maintenance services, ensuring safety and efficiency in every project.
        </p>
      </aside>

      {/* Main Section */}
      <section className="content">
        {/* Hero Section */}
        <div className="hero-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/company2.jpeg`}
            alt="Electrical Maintenance Hero"
            className="main-img"
          />
          <div className="hero-text">towa denki</div>
        </div>

        {/* About Us Text */}
        <div className="about-text">
          <p>
            At Towa Denki, we are dedicated to delivering exceptional services. Since our founding, we've been
            committed to providing reliable and sustainable electrical maintenance solutions for both commercial and
            residential clients.
          </p>
        </div>

        {/* About Heading */}
        <h2 className="about-heading">About Us</h2>
        <hr />

        {/* Elements Section */}
        <section className="elements">
          {selectedElement === null ? (
            // Show all elements if no element is selected
            <>
              {/* Element 1 - Our Story */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/story.jpg`} alt="Our Story" />
                <div className="element-info">
                  <h3>Our Story</h3>
                  <p>Learn about how we started and our commitment to excellence in the electrical industry.</p>
                  <button onClick={() => handleReadMore(1)}>Read more</button>
                </div>
              </div>

              {/* Element 2 - Our Team */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/coworking.jpg`} alt="Our Team" />
                <div className="element-info">
                  <h3>Our Team</h3>
                  <p>Meet the professional and experienced team members who power our company’s success.</p>
                  <button onClick={() => handleReadMore(2)}>Read more</button>
                </div>
              </div>

              {/* Element 3 - Our Services */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/electrical.jpg`} alt="Our Services" />
                <div className="element-info">
                  <h3>Our Services</h3>
                  <p>Discover our range of electrical maintenance services designed to meet your needs.</p>
                  <button onClick={() => handleReadMore(3)}>Read more</button>
                </div>
              </div>

              {/* Element 4 - Sustainability */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/connectingCable.jpg`} alt="Sustainability" />
                <div className="element-info">
                  <h3>Our Sustainability</h3>
                  <p>Learn how we incorporate sustainable practices in every aspect of our work.</p>
                  <button onClick={() => handleReadMore(4)}>Read more</button>
                </div>
              </div>

              {/* Element 5 - Our CEO */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/ceo.jpg`} alt="Our CEO" />
                <div className="element-info">
                  <h3>Our CEO</h3>
                  <p>Meet our visionary leader, dedicated to driving the company towards excellence.</p>
                  <button onClick={() => handleReadMore(5)}>Read more</button>
                </div>
              </div>

              {/* Element 6 - Our Founder */}
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/assets/founder.jpg`} alt="Our Founder" />
                <div className="element-info">
                  <h3>Our Founder</h3>
                  <p>Learn about the journey and vision of our founder who started it all.</p>
                  <button onClick={() => handleReadMore(6)}>Read more</button>
                </div>
              </div>
            </>
          ) : (
            // Show detailed content based on selected element
            <div className="detail-view">
              {selectedElement === 1 && (
                <>
                  <h3>Our Story</h3>
                  <p>
                    Towa Denki was founded in 1995 with the vision of providing reliable electrical solutions. 
                    Over the years, we have expanded our services, embracing new technologies and methodologies to ensure 
                    our clients receive the highest quality of service. Our journey has been marked by a commitment to 
                    excellence, innovation, and customer satisfaction.
                  </p>
                </>
              )}
              {selectedElement === 2 && (
                <>
                  <h3>Our Team</h3>
                  <p>
                    Our team consists of highly skilled electricians, engineers, and project managers dedicated to 
                    delivering exceptional results. With years of experience in the industry, our professionals 
                    are equipped with the latest training and certifications to handle any electrical project. 
                    We believe in fostering a collaborative and supportive work environment, allowing our team 
                    to thrive and contribute their best.
                  </p>
                </>
              )}
              {selectedElement === 3 && (
                <>
                  <h3>Our Services</h3>
                  <p>
                    We offer a comprehensive range of electrical maintenance services, including residential and 
                    commercial wiring, troubleshooting, repairs, and energy-efficient upgrades. Our team works closely 
                    with clients to tailor solutions that fit their specific needs and ensure the safety and 
                    efficiency of their electrical systems.
                  </p>
                </>
              )}
              {selectedElement === 4 && (
                <>
                  <h3>Our Sustainability</h3>
                  <p>
                    At Towa Denki, we prioritize sustainability in our operations. We implement eco-friendly 
                    practices, such as using energy-efficient materials and reducing waste through recycling and 
                    responsible sourcing. Our goal is to minimize our environmental impact while providing high-quality 
                    services to our clients.
                  </p>
                </>
              )}
              {selectedElement === 5 && (
                <>
                  <h3>Our CEO</h3>
                  <p>
                    Our CEO, Jane Doe, has over 20 years of experience in the electrical industry. Under her 
                    leadership, Towa Denki has seen significant growth and innovation. Jane is passionate about 
                    empowering her team and fostering a culture of excellence. Her vision is to lead the company 
                    towards a sustainable and successful future.
                  </p>
                </>
              )}
              {selectedElement === 6 && (
                <>
                  <h3>Our Founder</h3>
                  <p>
                    Towa Denki was founded by John Smith, whose vision was to create a company that prioritizes 
                    quality and customer satisfaction. John's extensive knowledge and passion for electrical systems 
                    laid the foundation for the company's success. Today, his principles of integrity and 
                    commitment to service continue to guide our operations.
                  </p>
                </>
              )}
              <button className='readMoreBtn' onClick={handleBack}>Back to All Elements</button>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default About;
