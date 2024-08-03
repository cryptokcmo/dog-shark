import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreateMemePage from './pages/Buy';
import CommunityPage from './pages/Community';
import TokenomicsPage from './pages/TokenomicsPage'; // Import the new page
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateMemePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
