import React from 'react';
import Header from './components/Header';
import StoreItem from './components/StoreItem';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <StoreItem />
      <StoreItem />
    </div>
  );
}

export default App;
