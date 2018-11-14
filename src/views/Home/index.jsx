import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGavel, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import news01 from './../../assets/img/news-01.jpg';
import news02 from './../../assets/img/news-02.jpg'

import Header from '../../components/Header';

class Home extends Component {
  render() {
    return (
      <div className = "container heightfull bkg-home" >
        <div className="row heightfull no-flex">
          
          <Header />

          <div className="col-12 scroll">
            <div className="wrapper margin-tb-x1 color-white">
              <div className="row">
                <div className="col-12">
                  <h2>Servicios Vigentes</h2>
                  <p>Seleccione uno de los servicios registrados a su usuario, para ingresar al portal de la solución específica.</p>
                  <ul className="block-list">
                    <li>
                      <a href="#;">
                        <div className="block">
                          <p>Revisión Automatizada</p>
                          <p className="title">Documentos <br />& Contratos</p>
                          <span className="icon">
                            <FontAwesomeIcon icon={faFileAlt} />
                          </span>
                        </div>                        
                      </a>
                    </li>

                    <li>
                      <a href="#;">
                        <div className="block">
                          <p>Generación</p>
                          <p className="title">Documentos <br />Legales</p>
                          <span className="icon">
                            <FontAwesomeIcon icon={faGavel} />
                          </span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#;">
                        <div className="block">
                          <p>Detección</p>
                          <p className="title">Fraudes <br />& Delitos</p>
                          <span className="icon">
                            <FontAwesomeIcon icon={faBalanceScale} />
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <h2>Mejora la experiencia de tu Asesoría Legal, te recomendamos otras integraciones:</h2>
                  <p>Estos servicios pueden complementar las soluciones legales para tu negocio.</p>

                  <ul className="block-list tips">
                    
                    <li>
                      <a href="#;">
                        <div className="block">
                          <div className="article-pic">
                            <img src={news01} alt="Investigaciones Forenses" />
                          </div>
                          <p className="number">01</p>
                          <p className="title">Investigaciones Forenses</p>
                          <p className="normal">Pruebas recogidas en la escena del crimen</p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#;">
                        <div className="block">
                          <div className="article-pic">
                            <img src={news02} alt="Investigaciones Forenses" />
                          </div>
                          <p className="number">02</p>
                          <p className="title">Asistentes virtuales legales</p>
                          <p className="normal">Pruebas recogidas en la escena del crimen</p>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#;">
                        <div className="block">
                          <div className="article-pic">
                            <img src={news01} alt="Investigaciones Forenses" />
                          </div>
                          <p className="number">03</p>
                          <p className="title">Asistentes virtuales legales</p>
                          <p className="normal">Pruebas recogidas en la escena del crimen</p>
                        </div>
                      </a>
                    </li>

                  </ul>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    );
  }
}

export default Home;

