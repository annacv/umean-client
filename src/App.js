import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './scss/App.scss';

import Index from './pages/Index';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/detail/:word' component={Detail} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
