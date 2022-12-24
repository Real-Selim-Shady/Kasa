import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/Home';
import reportWebVitals from './webVitals/reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FicheLogement from './pages/ResidencePage';
import Error from './pages/Error';
import APropos from './pages/APropos'
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

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/FicheLogement">
          <FicheLogement />
        </Route>
        <Route exact path="/Error">
          <Error />
        </Route>
        <Route exact path="/APropos">
          <APropos />
        </Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

