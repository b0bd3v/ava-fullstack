import React, { Component } from 'react';
import logo from './logo.svg';
import './Sobre.scss';

class Sobre extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Sistema desenvolvido por Roberto Martins</h1>
        <p>Com o objetivo de avaliação para a vaga de desenvolvedor na Iconic.</p>
      </header>
    );
  }
}

export default Sobre;
