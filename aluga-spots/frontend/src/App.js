import React from 'react';

import './App.css';

import thundercats from './assets/thundercats.svg'

import Routes from './routes'

function App() {
 
  return (
    <div className="conteiner">
      <img src={thundercats} alt="thundercats"/>
      
      <div className="content">
        <Routes/>
      
      </div>
    </div>
  );
}

export default App;

