/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import './Error.css';
import React from 'react';

function Error() {
  return (
    <div className="errorBackground">
      <div className="errorNumber" key="errorNumber">404</div>
      <div className="errorMessage" key="errorMessage">
        Oups! La page que vous demandez n'existe pas
      </div>
      <a href="/" className="linkToHome" key="lala">
        Retournez sur la page d'accueil
      </a>
    </div>
  );
}

export default Error;
