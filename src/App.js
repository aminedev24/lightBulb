import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n configuration
import Header from './components/header';
import Home from './components/homepage';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header /> {/* The Header is outside the Routes so it remains on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </I18nextProvider>
  );
};

export default App;
