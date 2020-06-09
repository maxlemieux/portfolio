import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';


const App = () => {
  const [state, setState] = useState({
    page: 'index'
  });

  return (
    <div className="container text-center">
      <Header page={state.page} setState={setState}/>
      <MainContent page={state.page}/>
      <Footer />
    </div>
  );
}

export default App;