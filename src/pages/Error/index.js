/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import '../../styles/Error.css';
import React from 'react';

function Error() {
  return (
    <div className="errorBackground">
      <div className="errorNumber">404</div>
      <div className="errorMessage">
        Oups! La page que vous demandez n'existe pas
      </div>
      <a href="/" className="linkToHome">
        Retournez sur la page d'accueil
      </a>
    </div>
  );
}

export default Error;
