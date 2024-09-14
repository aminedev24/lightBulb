import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation(); // Destructure i18n from useTranslation to switch languages

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <h1 className="logo">
        <Link to='/lightBulb'>Towa Denki</Link>
      </h1>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>日本語</button>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
    </header>
  );
}

export default Header;
