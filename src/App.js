import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
          <Switch>
            <Route path="/contact">
              <PageTitle title="contact"/>
            </Route>
            <Route path="/blog">
              <PageTitle title="blog"/>
            </Route>
            <Route path="/shop">
              <PageTitle title="shop"/>
            </Route>
            <Route path="/portfolio">
              <PageTitle title="portfolio"/>
            </Route>
            <Route path="/about">
              <PageTitle title="about"/>
            </Route>
            <Route path="/">
              <PageTitle title="home"/>
            </Route>
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
