import React, { Component } from 'react';
import cognitiva from './../../../assets/img/cognitiva-logo.svg';
import cariola from './../../../assets/img/cariola-logo.svg';
import logo from './../../../assets/img/lexnova-logo.svg';

import Notification from './../../../components/Notification';


class Recover extends Component {

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

              <h1>Recuperar Clave</h1>
              <p>Ingrese el email de ingreso al sistema, en breve enviaremos un correo con un link para cambiar su clave.</p>

              <form>
                <fieldset>
                  <legend>Email</legend>
                  <input type="email" name="email" placeholder="Ej. usuario@correo.cl" />
                </fieldset>
                <button className="primary-button block-button">Ingresar</button>

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
    )
  }

}

export default Recover;