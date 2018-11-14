import React, { Component } from 'react';

import logo from './../../assets/img/lexnova-logo.svg';
import cognitiva from './../../assets/img/cognitiva-logo.svg';
import cariola from './../../assets/img/cariola-logo.svg';
import isotipo from './../../assets/img/isotipo-lexnova.svg';

class Login extends Component {
  render() {
    return (
      <div className="container heightfull">
        <div className="row heightfull vert-align-item">

          <div className="col-5">
            <div className="row">
              <div className="col-8 col-offset-2">

                <div className="logo">
                  <img src={logo} alt="Lexnova" />
                </div>

                <h1>¡Bienvenido!</h1>
                <p>Por su seguridad y confidencialidad de la información, por favor ingrese su rut y clave alfanumérica</p>

                <form>
                  <fieldset className="error">
                    <legend>Rut</legend>
                    <input type="text" name="rut" placeholder="Ej. 11111111-1" />
                  </fieldset>

                  <fieldset>
                    <legend>Clave</legend>
                    <input type="password" name="clave" placeholder="······" />
                  </fieldset>

                  <div className="text-right">
                    <a href="#;">Recuperar clave</a>
                  </div>

                  <button className="primary-button block-button">Ingresar</button>

                  <div className="row logos">
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

          <div className="col-7 heightfull bkg-login">
            <div className="row heightfull vert-align-item">
              <div className="col-8 col-offset-2">

                <div className="isotipo">
                  <img src={isotipo} alt="Lexnova" />
                </div>

                <div className="text-block">
                  <p>Desarrollamos soluciones de Inteligencia artificial</p>
                  <div className="palatino-text">En el Ámbito<br /> Legal</div>
                  <button className="padding-x3">Contacto</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;