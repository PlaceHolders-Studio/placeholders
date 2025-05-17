import React, { useEffect, useState } from 'react';

const Header = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? 'light' : '';
  }, [lightMode]);

  return (
    <header>
      <img 
        src={process.env.PUBLIC_URL + '/knotfun-logo.png'}
        alt="PlaceHolders Logo"
        className="logo"
        style={{ height: '60px' }}
      />
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
        <button onClick={() => setLightMode(!lightMode)}>
          {lightMode ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;