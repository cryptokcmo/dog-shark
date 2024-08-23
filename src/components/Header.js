import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          
          <span className="logo-text">
            <span>Dog-Shark</span>
          </span>
        </a>

        <a
          id="btnHamburger"
          href="#"
          className="header__toggle hide-for-desktop"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className="header__links hide-for-mobile">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/buy" className="nav-link">
            Buy
          </Link>
          <Link to="/community" className="nav-link">
            Community
          </Link>
          <Link to="/tokenomics" className="nav-link">
            Tokenomics
          </Link>
        </div>

        <div className={`header__menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/buy" onClick={closeMenu}>
            Buy
          </Link>        
          <Link to="/community" onClick={closeMenu}>
            Community
          </Link>        
          <Link to="/tokenomics" onClick={closeMenu}>
            Tokenomics
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
