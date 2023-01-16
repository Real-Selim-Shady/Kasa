import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/Home';
// import reportWebVitals from './webVitals/reportWebVitals';
import Banner from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Router>
    <Banner />
    <App />
    <Footer />
  </Router>,
);

// reportWebVitals();
