import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import sharkDogImage from '../images/shark-dog.jpg'; // Import the image

function HomePage() {
  return (
    <div className="HomePage">
      <motion.div
        className="hero-image"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
      >
        <img
          src={sharkDogImage}
          alt="Dog Shark in a costume"
          className="shark-dog-image"
          aria-label="Image of a dog in a shark costume" // ARIA label for screen readers
        />
      </motion.div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.1, color: '#FF6347' }} // Example hover effect
      >
        Welcome to Dog Shark!
      </motion.h1>
    </div>
  );
}

export default HomePage;
