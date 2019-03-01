import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


class UsuarioEdicao extends Component {

    handleSubmit = () => {

        axios.put('http://localhost:3333/usuario',
            {
                _id: this.props.usuario._id,
                info: {
                    username: 'teste',
                    firstname: 'teste',
                    lastname: 'teste',
                    email: 'tess',
                    phoneNumber: 'teste',
                    birthdate: 'teste',
                    document: 'teste',
                    address: 'teste'
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const usuario = this.props.usuario

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome de usuário' placeholder='Nome de usuário' value={usuario.info.username} />
                    <Form.Input fluid label='Primeiro Nome' placeholder='Primeiro Nome' value={usuario.info.firstname} />
                    <Form.Input fluid label='Segundo Nome' placeholder='Segundo Nome' value={usuario.info.lastname} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='E-mail' placeholder='E-mail' value={usuario.info.email} />
                    <Form.Input fluid label='Telefone' placeholder='Telefone' value={usuario.info.phoneNumber} />
                    <Form.Input fluid label='Segundo Nome' placeholder='Segundo Nome' value={usuario.info.birthdate} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Document' placeholder='Document' value={usuario.info.document} />
                </Form.Group>
                <Form.TextArea label='Endereço' placeholder='...' value={usuario.info.address} />
                <Form.Button primary content='Salvar' />
            </Form>
        );
    }
}

export default UsuarioEdicao;
