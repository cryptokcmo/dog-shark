import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Buy</Link>
        <Link to="/community">Community</Link>
        <Link to="/tokenomics">Tokenomics</Link> 
      </nav>
    </header>
  );
}

export default Header;
