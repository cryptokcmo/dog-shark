import React from 'react';
import './TokenomicsPage.css';

function TokenomicsPage() {
  return (
    <div className="TokenomicsPage">
      <div className="tokenomics-box">
        <h1>Tokenomics</h1>
        <div className="tokenomics-content">
          <h2>Total Supply</h2>
          <p>10 billion tokens</p>

          <h2>Transaction Tax</h2>
          <p>1% tax on transactions for project development and funding</p>

          <h2>Liquidity Lock</h2>
          <p>Liquidity is locked for 1 year</p>

          <h2>Staking Rewards</h2>
          <p>10% APR on staked tokens</p>
        </div>
      </div>
    </div>
  );
}

export default TokenomicsPage;
