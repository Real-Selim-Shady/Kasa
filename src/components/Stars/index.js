/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useState} from 'react';
import '../../styles/Stars.css';

function Stars({ residence2 /* ,residences2, updateResidences2 */ }) {
  const redStarsNumber = residence2.rating;
  // let greyStarsNumber = 5-residence2.rating

  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      {range.map((n) => (n <= redStarsNumber ? (
        <img
          src="https://i.ibb.co/7JMQPzg/RedStar.png"
          className="stars"
          key={`RedStar${n}`}
          alt="étoile rouge"
        />
      ) : (
        <img
          src="https://i.ibb.co/nR7zpKR/GreyStar.png"
          className="stars"
          key={`GreyStar${n}`}
          alt="étoile grise"
        />
      )))}
    </div>
  );
}

export default Stars;

/* (<span>red{n}</span>) : (<span>grey{n}</span>) */
