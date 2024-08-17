// src/pages/Community.js
import React from 'react';
import { motion } from 'framer-motion';
import './Community.css'; // Ensure CSS is correctly linked

function Community() {
  return (
    <div className="Community">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="hero-title">Join Our Community!</h1>
        <p className="hero-description">Connect with us on social media and be part of the Dog Shark adventure!</p>
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" className="social-button" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://discord.gg/yourserver" className="social-button" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="https://telegram.org/yourchannel" className="social-button" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://instagram.com/yourprofile" className="social-button" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Community;
