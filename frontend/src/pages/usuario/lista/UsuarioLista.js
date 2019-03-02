import React, { Component } from 'react';
import './UsuarioLista.scss';
import { Table, Container, Modal, Message, Breadcrumb, Button, Icon } from 'semantic-ui-react';
import UsuarioEdicao from '../edicao/UsuarioEdicao';
import Moment from 'moment';
import axios from 'axios';

class UsuarioLista extends Component {

    state = {
        isLoading: true,
        usuarios: [],
        error: null,
        showModal: false,
        updateSuccess: null
    }

    /**
     * Carregamento de dados do usuário.
     */    
    loadUsers() {
        axios.get('http://127.0.0.1:3333/usuarios')
            .then(response => {
                this.setState({
                    usuarios: response.data,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.loadUsers()
    }

    /**
     * Evento de fechar o modal de edição dos usuários.
     */
    closeModal(){
        this.setState({
            showModal: null
        })
    }

    /**
     * Evento de abertura do modal de edição de usuários.
     */
    onOpenModal(id){
        this.setState({
            showModal: id
        })
    }

    /**
     * Evento de quando o usuário é alterado com sucesso.
     * @param usuario 
     */
    updateSuccess(usuario){
        this.setState({
            updateSuccess: {
                usuario: usuario
            }
        })
    }

    render() {

        const { isLoading, usuarios, error, showModal, updateSuccess } = this.state;

        return (
            <Container style={{ marginTop: '7em' }}>
                <h1>Usuários</h1>
                <Breadcrumb>
                    <Breadcrumb.Section>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>Usuários</Breadcrumb.Section>
                </Breadcrumb>
                {error ? <p>{error.message}</p> : null}
                {updateSuccess? <Message success header='Sucesso' content={'O procedimento de alteração dos dados do usuário ' + updateSuccess.usuario + ' foi realizado com sucesso.'} /> : null}
                
                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="id-head-cell">ID</Table.HeaderCell>
                            <Table.HeaderCell>Usuário</Table.HeaderCell>
                            <Table.HeaderCell className="created-at-head-cell">Data de cadastro</Table.HeaderCell>
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
                                    <Table.Row key={usuario._id}>
                                        <Table.Cell>{usuario._id}</Table.Cell>
                                        <Table.Cell>{usuario.info.username}</Table.Cell>
                                        <Table.Cell className="created-at-cell">{Moment(usuario.createdAt).format("DD/MM/YYYY")}</Table.Cell>
                                        <Table.Cell textAlign='right'>{usuario.info.phoneNumber}</Table.Cell>
                                        <Table.Cell>{usuario.info.firstname}</Table.Cell>
                                        <Table.Cell>{usuario.info.lastname}</Table.Cell>
                                        <Table.Cell className="action-cell">
                                            <Modal onOpen={() => {
                                                this.onOpenModal(usuario._id)
                                            }} onClose={()=>{
                                                this.closeModal()
                                            }} open={showModal === usuario._id} trigger={
                                                <Button animated>
                                                    <Button.Content hidden>Editar</Button.Content>
                                                    <Button.Content visible>
                                                        <Icon name='edit' />
                                                    </Button.Content>
                                                </Button>
                                            }>
                                                <Modal.Header>Editar usuário {usuario.info.username}</Modal.Header>
                                                <Modal.Content>
                                                    <UsuarioEdicao updateSuccess={(usuario) => this.updateSuccess(usuario)} callbackParent={() => this.closeModal()} callbackSubmit={() => this.loadUsers()} usuario={usuario} />
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
