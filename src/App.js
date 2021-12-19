import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import Home from './Home'
import Concept from './Concept'
import Big from './Big'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:topic/:subtopic" component={Concept} />
      <Route exact path="/big" component={Big} />
    </Switch>
  );
}

export default App;
