// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Buy from './pages/Buy'; // Updated import
import CommunityPage from './pages/Community';
import TokenomicsPage from './pages/TokenomicsPage';
import HowstheDog from './pages/HowstheDog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} />
        <Route path="/howsthedog" element={<HowstheDog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
