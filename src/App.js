import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Experience from './components/Experience'

import './App.scss';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path ="/"> <Home/> </Route>
        <Route exact path ="/experience"> <Experience/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
