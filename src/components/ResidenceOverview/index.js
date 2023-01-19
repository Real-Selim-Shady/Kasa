/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ResidenceOverview.css';
import '../../styles/App.css';
import { Navigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Slider from '../Slider';
import Stars from '../Stars';

function ResidencePage() {
  const params = useParams();
  const [residences2, updateResidences2] = useState([]);

  useEffect(() => {
    fetch('../data/data.json')
      .then((response2) => response2.json())
      .then((data2) => {
        updateResidences2(data2);
        const residenceInfo2 = data2.find((residence) => residence.id === params.id);
        console.log(residenceInfo2.id);
      })
      .catch(() => {
        updateResidences2([false]);
      });
  }, []);

  const residenceInfo = residences2.find((residence2) => residence2.id === params.id);

  const Colapse = (e) => {
    const parent = e.target.parentElement;
    const grandParent = parent.parentElement;
    const grandParent2 = grandParent.parentElement;
    const ancestor = grandParent2.parentElement;

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

  if (params.id === residenceInfo?.id) {
    return (
      <div className="App">
        <div className="overviewContents" key={residenceInfo.id}>
          <div className="screenTop">
            <div className="sliderBloc">
              <Slider
                residences2={residences2}
                updateResidences2={updateResidences2}
                residence2={residenceInfo}
              />
            </div>
          </div>
          <div className="screenMid">
            <div className="screenMid1">
              <div className="title">{residenceInfo.title}</div>
              <div className="localisation">{residenceInfo.location}</div>
              <div className="tagsBloc">
                {residenceInfo.tags.map((tag) => (
                  <div key={residenceInfo.id + tag} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="screenMid2">
              <div className="hostBloc">
                <div className="hostName">
                  {' '}
                  {residenceInfo.host.name}
                </div>
                <img
                  src={residenceInfo.host.picture}
                  className="hostPicture"
                  alt="image_de l'hote"
                />
              </div>
              <div className="rating">
                <Stars
                  residences2={residences2}
                  updateResidences2={updateResidences2}
                  residence2={residenceInfo}
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
                {residenceInfo.description}
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
                {residenceInfo.equipments.map((equipment) => (
                  <div key={residenceInfo.id + equipment}>{equipment}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (residences2.length === 1) { return (<Navigate replace to="/*" />); }
  return (null);
}

export default ResidencePage;
