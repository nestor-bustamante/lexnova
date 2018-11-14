import React, { Component } from 'react';

import Login from './views/Login';
import Recover from './views/Login/Recover';
import Change from './views/Login/Change';
import Home from './views/Home/';
import DocumentsAndContracts from './views/DocumentsAndContracts';

import { Route } from 'react-router-dom';

import './assets/css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="heightfull">
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/recover" component={Recover} />
        <Route exact path="/change" component={Change} />

        <Route exact path="/" component={Home} />
        <Route exact path="/documents-contracts" component={DocumentsAndContracts} />
      </div>
    );
  }
}

export default App;
