/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Navigate } from 'react-router-dom';

function Redirect() {
  return (<Navigate replace to="/*" />);
}

export default Redirect;
