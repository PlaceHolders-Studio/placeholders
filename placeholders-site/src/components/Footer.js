import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        {/* <div className="footer-logo">
          <img 
            src={process.env.PUBLIC_URL + '/favicon/LogoPlaceHolders32.ico'}
            alt="KnotFun"
            className="footer-logo-img"
          />
          <span>KnotFun</span>
        </div>
        <p className="copyright">© {currentYear} PlaceHolders Team. All rights reserved.</p> */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <img 
              src={process.env.PUBLIC_URL + '/favicon/LogoPlaceHolders32.ico'}
              alt="KnotFun"
              className="footer-logo-img"
            />
            <span>KnotFun</span>
          </div>
          <p className="copyright">© {currentYear} PlaceHolders Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;