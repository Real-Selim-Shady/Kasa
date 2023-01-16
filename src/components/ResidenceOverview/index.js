/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../../styles/FicheLogement.css';
import '../../styles/App.css';
import '../../styles/Colapse.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Slider from '../Slider';
import Stars from '../Stars';

function ResidencePage() {
  const [residences2, updateResidences2] = useState([]);

  useEffect(() => {
    fetch('../data/data.json')
      .then((response2) => {
        /* eslint no-console: "off" */
        console.log(response2);
        return response2.json();
      })
      .then((data2) => {
        console.log(data2);
        updateResidences2(data2);
      });
  }, []);

  const params = useParams();

  const Colapse = (e) => {
    const parent = e.target.parentElement;
    // let parentID = parent.id;

    const grandParent = parent.parentElement;
    // let grandParentID = grandParent.id;

    const grandParent2 = grandParent.parentElement;
    // let grandParent2ID = grandParent2.id;

    const ancestor = grandParent2.parentElement;
    // let ancestorID = ancestor.id

    if (e.target.id === 'opened') {
      e.target.style.transform = 'rotate(360deg)';
      e.target.id = 'closed';
      ancestor.lastChild.style.display = 'none';
    } else {
      e.target.id = 'opened';
      e.target.style.transform = 'rotate(180deg)';
      ancestor.lastChild.style.display = 'flex';
    }
  };

  return (
    <div className="App">
      {residences2.map((residence2) => (params.id === residence2.id ? (
        <div className="overviewContents" key={residence2.id}>
          <div className="screenTop">
            <div className="sliderBloc">
              <Slider
                residences2={residences2}
                updateResidences2={updateResidences2}
                residence2={residence2}
              />
            </div>
          </div>
          <div className="screenMid">
            <div className="screenMid1">
              <div className="title">{residence2.title}</div>
              <div className="localisation">{residence2.location}</div>
              <div className="tagsBloc">
                {residence2.tags.map((tag) => (
                  <div key={residence2.id + tag} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="screenMid2">
              <div className="hostBloc">
                <div className="hostName">
                  {' '}
                  {residence2.host.name}
                </div>
                <img
                  src={residence2.host.picture}
                  className="hostPicture"
                  alt="image_de l'hote"
                />
              </div>
              <div className="rating">
                <Stars
                  residences2={residences2}
                  updateResidences2={updateResidences2}
                  residence2={residence2}
                />
              </div>
            </div>
          </div>
          <div className="screenBottom">
            <div className="supraBloc" id="ancestor">
              <div className="blocTitle" id="grandParent2">
                <p>Description</p>
                <div className="arrowBloc" id="grandParent">
                  <button className="arrowColapse" id="parent">
                    <img
                      onClick={Colapse}
                      id="closed"
                      src="https://i.ibb.co/C9DVxRJ/arrow-Down.png"
                      alt="fleche de bloc d'information"
                      className="arrowSize"
                    />
                  </button>
                </div>
              </div>
              <div className="blocInfo" id="cousin">
                {residence2.description}
              </div>
            </div>
            <div className="supraBloc" id="ancestor">
              <div className="blocTitle" id="grandParent2">
                <p>Equipements</p>
                <div className="arrowBloc" id="grandParent">
                  <button className="arrowColapse" id="parent">
                    <img
                      onClick={Colapse}
                      id="closed"
                      src="https://i.ibb.co/C9DVxRJ/arrow-Down.png"
                      alt="fleche de bloc d'information"
                      className="arrowSize"
                    />
                  </button>
                </div>
              </div>
              <div className="blocInfoStuff" id="cousin">
                {residence2.equipments.map((equipment) => (
                  <div key={residence2.id + equipment}>{equipment}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null))}
    </div>
  );
}

export default ResidencePage;
