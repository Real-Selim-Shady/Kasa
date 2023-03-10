import './Footer.css';
import React from 'react';

function Footer() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="footerBackground">
      <div className="footerContent">
        <img
          className="footerLogo"
          src="https://i.ibb.co/pQSvLP4/LOGO.png"
          alt="Logo de bas de page"
        />
        <p className="legal">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
