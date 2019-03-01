import React, { Component } from 'react';
import './UsuarioLista.scss';
import { Table, Container, Modal, Breadcrumb, Button, Icon } from 'semantic-ui-react';
import UsuarioEdicao from '../edicao/UsuarioEdicao';
import axios from 'axios';

class UsuarioLista extends Component {

    state = {
        isLoading: true,
        usuarios: [],
        error: null
    }


    loadUsuarios() {
        axios.get('http://127.0.0.1:3333/usuarios')
            .then(response => {
                this.setState({
                    usuarios: response.data,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.loadUsuarios()
    }

    render() {

        const { isLoading, usuarios, error } = this.state;

        return (
            <Container style={{ marginTop: '7em' }}>
                <h1>Usuários</h1>
                <Breadcrumb>
                    <Breadcrumb.Section>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>Usuários</Breadcrumb.Section>
                </Breadcrumb>
                {error ? <p>{error.message}</p> : null}
                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Usuário</Table.HeaderCell>
                            <Table.HeaderCell>Data de cadastro</Table.HeaderCell>
                            <Table.HeaderCell>Telefone</Table.HeaderCell>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {!isLoading ? (
                            usuarios.map(usuario => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{usuario.info.username}</Table.Cell>
                                        <Table.Cell>{usuario.createdAt}</Table.Cell>
                                        <Table.Cell textAlign='right'>{usuario.info.phoneNumber}</Table.Cell>
                                        <Table.Cell>{usuario.info.firstname}</Table.Cell>
                                        <Table.Cell>{usuario.info.lastname}</Table.Cell>
                                        <Table.Cell className="action-cell">
                                            <Modal trigger={
                                                <Button animated='vertical'>
                                                    <Button.Content hidden>Editar</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='edit' />
                                                    </Button.Content>
                                                </Button>
                                            }>
                                                <Modal.Header>Editar usuário {usuario.info.username}</Modal.Header>
                                                <Modal.Content>
                                                    <UsuarioEdicao usuario={usuario} />
                                                </Modal.Content>
                                            </Modal>
                                        </Table.Cell>
                                    </Table.Row>

                                );
                            })
                        ) : (
                                <Table.Row>
                                    <Table.Cell colSpan="5">Carregando...</Table.Cell>
                                </Table.Row>
                            )}
                    </Table.Body>
                </Table>
            </Container>
        );
    }
}

export default UsuarioLista;
