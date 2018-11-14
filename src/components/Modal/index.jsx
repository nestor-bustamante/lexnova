import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Modal extends Component {

  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            Este es un título
            <button>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="modal-body">
            <p>Está seguro que desea cancelar la subida de archivos.</p>
            <p>Si presiona aceptar perderá el progreso de subida hasta el momento.</p>
          </div>
          <div className="modal-footer text-right">
            <a href="#;">Cancelar</a>
            <button className="primary-button padding-x3 no-margin-bt margin-left-x2">Aceptar</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Modal;
