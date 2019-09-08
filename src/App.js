import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/App.scss';

import Index from './pages/Index';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
