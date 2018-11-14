import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Se le deben añadir 2 clases a "row-notification": 
// "active" para mostrar la notificación.
// "success" o "error" dependiendo del tipo de notificación.

class Notification extends Component {
  render() {
    return (
      <div className="row-notification">
        Excelente! Su nueva contraseña ha sido enviada.
        <button className="icon close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    );
  }
}

export default Notification;