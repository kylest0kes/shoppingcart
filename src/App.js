import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'

import Header from './components/Header';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import About from './pages/About';


import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' render={() => (
              <HomePage />
            )} />
            <Route path='/cart' render={() => (
              <Cart />
            )} />
            <Route path='/about' render={() => (
               <About />
            )} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
