/* eslint-disable react/jsx-filename-extension */
import '../../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import LogementList from '../../components/ResidencesList';
import APropos from '../APropos';
import './Home.css';
import ResidencePage from '../../components/ResidenceOverview';
import Error from '../Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <section className="appHome">
              <div className="homeBackground">
                <div className="homeTitle">
                  <img
                    className="homeBigPic"
                    src="https://i.ibb.co/Gt31fPX/chezVous.png"
                    alt="image_chez_vous,partout_et_ailleurs"
                  />
                  <div className="picText">
                    <p className="picText1">Chez vous,</p>
                    <p className="picText2">partout et ailleurs</p>
                  </div>
                </div>
                <LogementList />
              </div>
            </section>
          )}
        />

        <Route
          path="/ResidenceOverview/:id"
          element={(
            <section className="appHome">
              <div className="homeBackground">
                <ResidencePage />
              </div>
            </section>
          )}
        />

        <Route
          path="/ResidenceOverview/ddd"
          element={(
            <section className="appHome">
              <div className="homeBackground">
                <Error />
              </div>
            </section>
          )}
        />

        <Route
          path="/*"
          element={(
            <section className="appHome">
              <Error />
            </section>
          )}
        />

        <Route
          path="/404/*"
          element={(
            <section className="appHome">
              <Error />
            </section>
          )}
        />

        <Route
          path="/*"
          element={(
            <section className="appHome">
              <Error />
            </section>
          )}
        />

        <Route
          path="/APropos"
          element={(
            <section className="appHome">
              <div className="homeBackground">
                <div className="homeTitle">
                  <img
                    className="aProposBigPic"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="image_page_à_propos"
                  />
                </div>
                <APropos />
              </div>
            </section>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
