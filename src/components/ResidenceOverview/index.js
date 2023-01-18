/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ResidenceOverview.css';
import '../../styles/App.css';
import '../../styles/Colapse.css';
import { Navigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Slider from '../Slider';
import Stars from '../Stars';
// import Error from '../../pages/Error';
// import Redirect from '../Navigate/Navigate';

function ResidencePage() {
  const [residences2, updateResidences2] = useState([]);

  useEffect(() => {
    fetch('../data/data.json')
      .then((response2) => response2.json())
      .then((data2) => {
        updateResidences2(data2);
      })
      .catch((error) => {
        const { response2 } = error.response2.data2;
        if (response2.statusText === 404) {
          Navigate('/404/*');
        }
      });
  }, []);
  const params = useParams();
  const residenceInfo = residences2.find((residence2) => residence2.id === params.id);

  // const redirect = () => (<Navigate replace to="/*" />);

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
      console.log(params.id);
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
  console.log('nooooo');
    <Navigate replace to="/*" />;
    return (
      <div>
        <Navigate replace to="/*" />
      </div>
    );
}

/*
  return (
    <div className="App">
      {residences2.map((residence2) => (params.id !== residence2.id ? (<Navigate replace to="/*" />)
        : (
          <div className="overviewContents">
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
        )))}
    </div>
  );
} */

export default ResidencePage;

/*
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
) : <Navigate replace to="/404" />))}
*/

/* residences2.map((residence2) => {
    if (params.id === residence2.id) {
      console.log('coucou');
      return (
        <div>coucou</div>
      );
    }
    console.log('non');
    return (
      <div>non</div>
    );
  }); */

/*
  return (
    <div>
      {
        residenceInfo ? (
          <div> oui </div>
        ) : <div>non</div>
      }
    </div>
  );
*/

/*
  if (residenceInfo) {
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
  }console.log('coucou');
  return <Error />;
*/

/*
  if (params.id === residenceInfo?.id) {
    debugger;
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
  console.log('nooooo');
  return (<div>Noo</div>);
  */

/* return (
    <div className="App">
      {params.id === residenceInfo?.id ? (
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
      ) : <Error />}
    </div>
  ); */
