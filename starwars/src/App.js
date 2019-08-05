import React from 'react';
import './App.css';

import Bio from './components/DataComponents/Bio.js';
import Header from "./components/HeaderComponents/Header.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header />
      <Bio />
    </div>
  );
}

export default App;
