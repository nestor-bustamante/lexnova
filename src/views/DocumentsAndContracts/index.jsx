import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrashAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

import Header from './../../components/Header';
import ProgressRing from './../../components/ProgressRing';
import Modal from './../../components/Modal';

class DocumentsAndContracts extends Component {
  render() {
    return (
      <div className="container heightfull bkg-views">
        <div className="row heightfull no-flex">

          <Header />

          <div className="col-12 scroll">
            
            <div className="row">
              <div className="col-12 bkg-menu">
                <div className="wrapper">
                  <div className="row">
                    <div className="col-12">

                      <ul className="menu-views">
                        <li className="active">
                          <a href="#;">digitalizar</a>
                        </li>
                        <li>
                          <a href="#;">revisar</a>
                        </li>
                        <li>
                          <a href="#;">administrar</a>
                        </li>
                        <li>
                          <a href="#;">informe poder</a>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper margin-tb-x1">
              <div className="row">
                <div className="col-12">

                  <h2>Cargar Archivos</h2>

                  <p>Arrastra para cargar tu(s) archivo(s), el archivo o conjunto de los mismos, irán asociados al RUT y empresa seleccionada. Antes de cargarlos deberá seleccionar la empresa.</p>

                  <div className="block block-padding-x1">
                    <form>
                      
                      <fieldset>
                        <div className="section-number-lb">1.</div>

                        <div className="select-container">
                          RUT / Nombre de Empresa
                          <div className="select-option-group">
                            
                            <div className="select-option">
                              <div className="select-icon">
                                <FontAwesomeIcon icon={faBuilding} />
                              </div>
                              <div className="select-info">
                                <div>NombreEmpresa / 00</div>
                                <span>RUT 000000000 - 0</span>
                              </div>
                            </div>

                            <div className="select-option">
                              <div className="select-icon">
                                <FontAwesomeIcon icon={faBuilding} />
                              </div>
                              <div className="select-info">
                                <div>NombreEmpresa / 00</div>
                                <span>RUT 000000000 - 0</span>
                              </div>
                            </div>

                            <div className="select-option">
                              <div className="select-icon">
                                <FontAwesomeIcon icon={faBuilding} />
                              </div>
                              <div className="select-info">
                                <div>NombreEmpresa / 00</div>
                                <span>RUT 000000000 - 0</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </fieldset>

                      <fieldset>
                        <div className="section-number-lb">2.</div>
                        <label className="file-upload">

                          <span className="file-icon">
                            <FontAwesomeIcon icon={faDownload} />
                          </span>

                          <span className="file-title">Arrastra para cargar tu(s) archivo(s) o <span>busca en tu computador</span>.</span>
                          <span className="file-paragraph">Se soportan archivos PDF y WORD con sus extensiones, es permitido cualquier peso de archivo. </span>

                          <input type="file" />
                        </label>
                      </fieldset>

                      <div className="text-right">
                        <a href="#;" className="no-margin-b">Cancelar</a>
                        <button className="primary-button margin-left-x2 no-margin-b">Confirmar subida</button>
                      </div>
                      
                    </form>

                    <div className="doc-list">

                      <div className="doc-item">
                        <div className="row vert-align-item">
                          <div className="col-1">
                            <div className="doc-type">
                              <ProgressRing
                                radius={25}
                                stroke={5}
                                progress={72}
                              />
                              <span>doc</span>
                            </div>
                          </div>
                          <div className="col-10">
                            <div className="doc-data">
                              <div className="doc-name">nombreDeArchivo.doc</div>
                              <div className="doc-size">124KB</div>
                            </div>
                          </div>
                          <div className="col-1">
                            <button>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="doc-item">
                        <div className="row vert-align-item">
                          <div className="col-1">
                            <div className="doc-type">
                              <ProgressRing
                                radius={25}
                                stroke={5}
                                progress={36}
                              />
                              <span>doc</span>
                            </div>
                          </div>
                          <div className="col-10">
                            <div className="doc-data">
                              <div className="doc-name">nombreDeArchivo.doc</div>
                              <div className="doc-size">124KB</div>
                            </div>
                          </div>
                          <div className="col-1">
                            <button>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <Modal />

      </div>

    );
  }
}

export default DocumentsAndContracts;