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
      <div className="App" style={{ marginTop: '17em' }}>
        <Container>
          <h1>ICONIC - Teste para vaga Desenvolvedor</h1>
          <p>Criar uma ferramenta de administração de usuários, contendo as seguintes funcionalidades.</p>
          <p>
            <ul>
              <li>
                <b>Visualização Usuários</b>
                <p>
                  Lista com todos os usuários, mostrando apenas os dados ID, data de cadastro, nro telefone, nome, sobrenome. - Lista de usuários encontra-se em anexo no arquivo users.json.
                </p>
              </li>
              <li>
                <b>Edição de dados de Usuários cadastrados</b>
                <p>
                Clique para expansão ou abertura de pop-up com com todos os dados - os de cima e os abaixo: <br />
                    <ul>
                      <li>
                        Nome de usuário
                      </li>

                      <li>
                        Nome
                      </li>

                      <li>
                        Sobrenome
                      </li>

                      <li>
                        Telefone
                      </li>

                      <li>
                        Data de nascimento
                      </li>

                      <li>
                        CPF
                      </li>

                      <li>
                        E-mail
                      </li>
                      <li>
                        Endereço completo
                      </li>
                      <li>
                        Confirmar edição e atualizar página.
                      </li>
                    </ul>
                </p>
              </li>
            </ul>
          </p>
            <Button primary as={Link} to="/usuarios">Acessar controle de usuários</Button>        
        </Container>
      </div>
        );
      }
    }
    
    export default App;
