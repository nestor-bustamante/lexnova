import React, { Component } from 'react';

import User from './../User';
import lexnova from './../../assets/img/lexnova-logo-header.svg';

class Header extends Component {
  render() {
    return (
      <div className="col-12">
        <header>
          <div className="logo-header">
            <img src={lexnova} alt="Lexnova" />
          </div>

          <div className="wrapper">
            <div className="row">
              <div className="col-12">
                <h1>Título de la sección</h1>
              </div>
            </div>
          </div>

          <User />
        </header>
      </div>
    );
  }
}

export default Header;