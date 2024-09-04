// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/homepage';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import './App.css';
import Footer from './components/footer';
const App = () => {
  return (
    <Router>
      <Header /> {/* The Header is outside the Routes so it remains on every page */}
      <Routes>
        <Route path="lightBulb/home" element={<Home />} />
        <Route path="lightBulb/about" element={<About />} />
        <Route path="lightBulb/services" element={<Services />} />
        <Route path="lightBulb/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
