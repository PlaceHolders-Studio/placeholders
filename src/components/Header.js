import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial theme detection
    const detectInitialTheme = () => {
      const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDarkReaderActive = document.documentElement.getAttribute('data-darkreader-scheme') === 'dark';
      
      // Only set to light mode if explicitly chosen before
      const savedThemePreference = localStorage.getItem('theme-preference');
      
      if (savedThemePreference === 'light') {
        // User has previously chosen light mode
        setLightMode(true);
        document.body.classList.add('light');
        document.documentElement.setAttribute('data-theme', 'light');
      } else if (!darkModePreference && !isDarkReaderActive) {
        // Default to light if system is in light mode and Dark Reader is not active
        setLightMode(false);
      }
    };

    // Initial theme detection
    detectInitialTheme();
    
    // Track scrolling for header style change
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // const handleScroll = () => {
    //   if (window.scrollY > 50) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };
    
    // Dark Reader observer
    const darkReaderObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-darkreader-scheme') {
          const isDarkReaderDark = document.documentElement.getAttribute('data-darkreader-scheme') === 'dark';
          
          // If Dark Reader is in dark mode and no explicit light mode preference, switch back to dark
          const savedThemePreference = localStorage.getItem('theme-preference');
          if (isDarkReaderDark && !savedThemePreference) {
            setLightMode(false);
            document.body.classList.remove('light');
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        }
      });
    });
    
    // Observe Dark Reader changes
    darkReaderObserver.observe(document.documentElement, { attributes: true });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      darkReaderObserver.disconnect();
    };
  }, []);
  // }, [lightMode]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Block scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Function to close the menu
  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    
    // Apply or remove light class
    if (newMode) {
      document.body.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme-preference', 'light');
    } else {
      document.body.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.removeItem('theme-preference');
    }
    
    // If Dark Reader is active, update to match our changes
    const isDarkReaderActive = document.documentElement.getAttribute('data-darkreader-scheme') !== null;
    if (isDarkReaderActive) {
      // This will help ensure the styles applied by Dark Reader don't conflict
      document.documentElement.setAttribute('data-darkreader-mode', newMode ? 'dynamic' : 'filter');
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="logo-container">
          <a href="#hero" onClick={closeMenu} className="logo-link">
            <img 
              src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
              alt="PlaceHolders Logo"
              className="logo"
            />
            <span className="site-name">PlaceHolders</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation */}
        <nav className={mobileMenuOpen ? 'open' : ''}>
          {mobileMenuOpen && (
            <a href="#hero" onClick={closeMenu} className="mobile-logo-link">
              <img 
                src={process.env.PUBLIC_URL + '/logo/LogoPlaceHolders512.png'}
                alt="PlaceHolders Logo"
                className="mobile-logo"
              />
              <span className="mobile-site-name">PlaceHolders</span>
            </a>
          )}
          
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#team" onClick={closeMenu}>Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {lightMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;