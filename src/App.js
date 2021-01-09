import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './store.js'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
