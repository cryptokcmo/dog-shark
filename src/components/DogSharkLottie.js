// src/components/DogSharkLottie.js
import React from 'react';
import Lottie from 'lottie-react';
import dogSharkAnimation from './dog-shark-animation.json'; // Path to your Lottie JSON file

function DogSharkLottie() {
  return (
    <div className="DogSharkLottie">
      <Lottie animationData={dogSharkAnimation} loop={true} />
    </div>
  );
}

export default DogSharkLottie;
