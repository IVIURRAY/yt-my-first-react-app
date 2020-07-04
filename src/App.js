import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <br />
        <br />
        <br />
        <br />
        <Router>
          <Link to="/about">Button About</Link>
          <br />
          <Link to="/contact">Button Contact</Link>
          <br />
          <Link to="/">Button Home</Link>
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/contact">
              Contact Me
            </Route>
            <Route path="/about">
              <Footer /> 
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </Router>
        <br />
        <br />
        <br />
        <br />
      <Footer />
    </div>
  );
}

export default App;
