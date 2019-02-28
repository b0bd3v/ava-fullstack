import React, { Component } from 'react';
import './UsuarioLista.scss';
import { Table, Container } from 'semantic-ui-react';

class UsuarioLista extends Component {
    render() {
        return (
            <Container style={{ marginTop: '7em' }}>
                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Data de cadastro</Table.HeaderCell>
                            <Table.HeaderCell>Telefone</Table.HeaderCell>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>usuario</Table.Cell>
                            <Table.Cell>12/12/2019</Table.Cell>
                            <Table.Cell textAlign='right'>(51) 99602-7850</Table.Cell>
                            <Table.Cell>Roberto</Table.Cell>
                            <Table.Cell>Martins</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>usuario</Table.Cell>
                            <Table.Cell>12/12/2019</Table.Cell>
                            <Table.Cell textAlign='right'>(51) 99602-7850</Table.Cell>
                            <Table.Cell>Roberto</Table.Cell>
                            <Table.Cell>Martins</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>usuario</Table.Cell>
                            <Table.Cell>12/12/2019</Table.Cell>
                            <Table.Cell textAlign='right'>(51) 99602-7850</Table.Cell>
                            <Table.Cell>Roberto</Table.Cell>
                            <Table.Cell>Martins</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        );
    }
}

export default UsuarioLista;
