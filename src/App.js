import React from 'react';
import './App.css';
import MainContent from './components/MainContent.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { PortfolioProvider } from './utils/GlobalState';

function App() {
  return (
    <div className="container text-center">
      <PortfolioProvider>
        <Header />
        <MainContent />
        <Footer />
     </PortfolioProvider>
    </div>
  );
}

export default App;
