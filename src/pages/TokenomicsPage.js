// src/pages/TokenomicsPage.js
import React from 'react';
import { motion } from 'framer-motion';
import './TokenomicsPage.css';

function TokenomicsPage() {
  return (
    <div className="TokenomicsPage">
      <motion.div
        className="tokenomics-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Tokenomics</h1>
        <div className="tokenomics-content">
          <h2>Total Supply</h2>
          <p>10 billion tokens</p>

          <h2>Transaction Tax</h2>
          <p>1% tax on transactions for project development and funding</p>

          <h2>Liquidity Burned</h2>
          <p>LP is Burned</p>

        </div>
      </motion.div>
    </div>
  );
}

export default TokenomicsPage;
