/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import './Slider.css';

function Slider({ residence2 /* , residences2, updateResidences2 */ }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? sliderArray[0].length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderArray[0].length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let sliderArray = [
    residence2.pictures.map((picture) => (
      <img
        key={residence2.id + picture}
        src={picture}
        className="picStyles"
        alt="photos de l'habitat"
      />
    )),
  ];

  return (
    <div>
      <div className="sliderButtons">
        <img
          src="https://i.ibb.co/cK9RtXZ/left-Arrow.png"
          className="arrowSlider"
          onClick={goToPrevious}
          alt="flèche de gauche"
        />
        <img
          src="https://i.ibb.co/VtvbnTh/right-Arrow.png"
          className="arrowSlider"
          onClick={goToNext}
          alt="flèche de droite"
        />
      </div>
      <div className="sliderInfoNum">
        {currentIndex + 1}
        /
        {sliderArray[0].length}
      </div>
      <div key={`${residence2.id} pictures`} className="containerStyles">
        {sliderArray[0][currentIndex]}
      </div>
    </div>
  );
}

export default Slider;
