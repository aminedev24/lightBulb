import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;