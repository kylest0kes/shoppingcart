import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'

import Header from './components/Header';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import About from './pages/About';
import storeItems from './storeItems';


import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path='/shoppingcart' render={() => (
              <HomePage storeItems={storeItems}/>
            )} />
            <Route exact path='/cart' render={() => (
              <Cart />
            )} />
            <Route exact path='/about' render={() => (
               <About />
            )} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
