import React from 'react';
import { motion } from 'framer-motion';
import './Buy.css';

function Buy() {
  return (
    <div className="Buy">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="hero-title">Buy Dog Shark Tokens!</h1>
        <p className="hero-description">Get your paws on Dog Shark tokens now! Find them on Jup or Raydium.</p>
        <div className="cta-buttons">
          <a href="https://jup.ag" className="cta-button" target="_blank" rel="noopener noreferrer">
            Buy on Jup
          </a>
          <a href="https://raydium.io" className="cta-button" target="_blank" rel="noopener noreferrer">
            Buy on Raydium
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Buy;
