import React, { Component } from 'react';
import cognitiva from './../../../assets/img/cognitiva-logo.svg';
import cariola from './../../../assets/img/cariola-logo.svg';
import logo from './../../../assets/img/lexnova-logo.svg';

import Notification from './../../../components/Notification';

class Change extends Component {

  render() {
    return (
      <div className="container heightfull bkg-gray">
        
        <Notification />

        <div className="row heightfull vert-align-item">
          <div className="col-4 col-offset-4">
            <div className="block-padding-x3 block">
              <div className="block-logo">
                <img src={logo} alt="Lexnova" />
              </div>
              <h1>Cambiar Clave</h1>
              <p>Por favor ingrese una nueva clave, recuerde que la misma debe tener mínimo 5 caracteres alfanuméricos.</p>
              <form>
                <fieldset>
                  <legend>Clave</legend>
                  <input type="password" name="pass_01" placeholder="Debe tener al menos un número" />
                </fieldset>
                <fieldset>
                  <legend>Repita su Clave</legend>
                  <input type="password" name="pass_02" placeholder="Debe ser iguales" />
                </fieldset>
                <button className="primary-button block-button">Cambiar  Clave</button>
                <div className="row block-logos">
                  <div className="col-5 col-offset-1">
                    <img src={cognitiva} alt="Cognitiva" />
                  </div>
                  <div className="col-5">
                    <img src={cariola} alt="Cariola" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Change;