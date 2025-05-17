import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? 'light' : '';
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lightMode]);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
            alt="PlaceHolders Logo"
            className="logo"
          />
          <span className="site-name">KnotFun</span>
        </div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setLightMode(!lightMode)}>
            {lightMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;