// components/Header.js

import React, { useState } from 'react';
import '../css/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src={"assets/logo.jfif"} alt="Company Logo" className="logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
