/* eslint-disable react/jsx-filename-extension */
import './ResidencesList.css';
import React, { useState, useEffect } from 'react';

function LogementList() {
  const [residences, updateResidences] = useState([]);

  useEffect(() => {
    fetch('data/data.json')
      .then((response) => response.json())
      .then((data) => {
        updateResidences(data);
      });
  }, []);

  return (
    <div className="LLBackground">
      {residences.map((residence) => (
        <div key={residence.id} className="coverCard">
          <a href={`/ResidenceOverview/${residence.id}`}>
            <img
              src={residence.cover}
              className="coverPic"
              alt="photo_de couverture de l'habitat"
            />
            <p className="coverTitle">{residence.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default LogementList;
