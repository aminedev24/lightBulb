// components/Header.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h4>Towa Denki </h4>
      {/*<img src={"assets/logo.jfif"} alt="Company Logo" className="logo" />*/}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
        <li><Link to="lightBulb/home" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="lightBulb/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="lightBulb/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="lightBulb/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
