import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import user from './../../assets/img/user-male.svg';

class User extends Component{
  render() {
    return (
      <div className="user">
        <div className="user-pic">
          <img src={user} alt=""/>
        </div>
        <div className="user-name">Néstor Bustamante</div>

        <button>
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    )
  }
} 

export default User;