/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-filename-extension */
import '../../styles/Banner.css';
import React from 'react';

function Banner() {
  return (
    <div className="bannerBackground">
      <div className="bannerElements">
        <a href={'/'}>
          <img
            className="logo"
            src="https://i.ibb.co/0cmGdb4/LOGO.png"
            alt="Logo du haut de page"
          />
        </a>
        <div className="linksBanner">
          <div className="linkHome">
            <a href={'/'} className="linkText">
              {' '}
              Accueil
              {' '}
            </a>
          </div>
          <div className="linkAPropos">
            <a href={'/APropos'} className="linkText">
              {' '}
              A Propos
              {' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
