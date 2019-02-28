import React, { Component } from 'react';
import logo from './logo.png';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="Header-logo" alt="Iconic" />
          <h1 className="Header-title">Controle de usuários</h1>
        </header>
      </div>
    );
  }
}

export default Header;
