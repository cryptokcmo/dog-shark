import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buy">Buy</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/tokenomics">Tokenomics</Link></li>
          <li><Link to="/howsthedog">How's the Dog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
