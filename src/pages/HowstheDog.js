// src/pages/HowstheDog.js
import React from 'react';
import { motion } from 'framer-motion';
import './HowstheDog.css';  // Ensure CSS is correctly linked

const HowstheDog = () => {
  return (
    <div className="howstheDog">
      <motion.div
        className="coming-soon"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="hero-title">Coming Soon...</h1>
        <p className="hero-description">Stay tuned for updates. Woof!</p>
      </motion.div>
    </div>
  );
};

export default HowstheDog;
