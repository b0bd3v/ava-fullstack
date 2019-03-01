import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  /**
   * Redirect to user page.
   */

  handleClick = () => {
    // this.props.browserHistory.push('/usuarios');
  };

  render() {
    return (
      <div className="App" style={{marginTop: '27em'}}>
        <Container>
          <h1>ICONIC - Teste para vaga Desenvolvedor</h1>
          <p>Criar uma ferramenta de administração de usuários, contendo as seguintes funcionalidades.</p>
          <p>
          Visualização Usuários: 
          - Lista com todos os usuários, mostrando apenas os dados ID, data de cadastro, nro telefone, 
          nome, sobrenome. - Lista de usuários encontra-se em anexo no arquivo users.json. 
          2. Edição de dados de Usuários cadastrados: 
          - Clique para expansão ou abertura de pop-up com com todos os dados - os de cima e os 
          abaixo: 
          - Nome de usuário - Nome - Sobrenome - Telefone - Data de nascimento - CPF - E-mail - Endereço completo - Confirmar edição e atualizar página. 
          </p>
          <Button primary as={Link} to="/usuarios">Acessar controle de usuários</Button>        
        </Container>
      </div>
    );
  }
}

export default App;
