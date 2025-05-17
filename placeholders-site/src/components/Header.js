import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Dodaj klasę do body aby zablokować scrollowanie podczas otwartego menu
    if (!mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Funkcja do zamykania menu
  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        {/* <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
            alt="PlaceHolders Logo"
            className="logo"
          />
          <span className="site-name">KnotFun</span>
        </div> */}
        <div className="logo-container">
          <a href="#hero" onClick={closeMenu} className="logo-link">
            <img 
              src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
              alt="PlaceHolders Logo"
              className="logo"
            />
            <span className="site-name">KnotFun</span>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* PC nav */}
        {/* <nav>
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setLightMode(!lightMode)}>
            {lightMode ? '🌙' : '☀️'}
          </button>
        </nav> */}
        <nav className={mobileMenuOpen ? 'open' : ''}>
          {mobileMenuOpen && (
            <a href="#hero" onClick={closeMenu} className="mobile-logo-link">
              <img 
                src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
                alt="PlaceHolders Logo"
                className="mobile-logo"
              />
              <span className="mobile-site-name">KnotFun</span>
            </a>
          )}
          
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#team" onClick={closeMenu}>Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle" onClick={() => setLightMode(!lightMode)}>
            {lightMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;