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
          <a href="https://x.com/Dog_Shark_Token" className="social-button" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://t.me/+aAF7iv89ECRlOWZh" className="social-button" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Community;
