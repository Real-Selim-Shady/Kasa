import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/Home';
//import reportWebVitals from './webVitals/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import Banner from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Banner />
    <App />
    <Footer />
  </Router>
);

//reportWebVitals();

