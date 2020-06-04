import React from 'react';
import './App.css';
import MainContent from './components/MainContent.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { PageProvider } from './utils/GlobalState';

function App() {
  return (
    <div className="container text-center">
      <PageProvider>
        <Header />
        <MainContent />
        <Footer />
     </PageProvider>
    </div>
  );
}

export default App;
