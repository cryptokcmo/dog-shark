// src/components/DogSharkSVG.js
import React from 'react';
import './DogShark.css';

function DogSharkSVG() {
  return (
    <div className="DogSharkSVG">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle className="head" cx="50" cy="50" r="40"/>
        <polygon className="fin" points="30,30 50,10 70,30"/>
      </svg>
    </div>
  );
}

export default DogSharkSVG;
