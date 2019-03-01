import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import MaskedField from 'react-masked-field';
import axios from 'axios';


class UsuarioEdicao extends Component {

    state = {
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        phoneNumber: null,
        birthdate: null,
        document: null,
        address: null
    }

    constructor(props){
        super(props)
        this.state = this.props.usuario.info
    }

    handleSubmit = () => {

        axios.put('http://localhost:3333/usuario',
            {
                _id: this.props.usuario._id,
                info: this.state
            })
            .then(response => {
                this.props.callbackParent(true)
                this.props.callbackSubmit()
            })
            .catch(error => {
                this.props.callbackParent(true)
            });

    }
    
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    setBirthDate(date){
        this.setState({ birthdate: date})
    }

    render() {
        const usuario = this.state


        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome de usuário' placeholder='Nome de usuário' name='username' onChange={this.handleChange} value={usuario.username} />
                    <Form.Input fluid label='Primeiro Nome' placeholder='Primeiro Nome' name='firstname' onChange={this.handleChange} value={usuario.firstname} />
                    <Form.Input fluid label='Segundo Nome' placeholder='Segundo Nome' name='lastname' onChange={this.handleChange} value={usuario.lastname} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='E-mail' placeholder='E-mail' name='email' onChange={this.handleChange} value={usuario.email} />
                    <Form.Input fluid label='Telefone' placeholder='Telefone' name='phoneNumber' onChange={this.handleChange} value={usuario.phoneNumber} />
                    <Form.Field>
                        <label>Data de nascimento</label>
                        <MaskedField mask="99/99/9999" value={usuario.birthdate} onComplete={(date) => this.setBirthDate(date)}/>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Document' placeholder='Document' name='document' onChange={this.handleChange} value={usuario.document} />
                </Form.Group>
                <Form.TextArea label='Endereço' placeholder='...' value={usuario.address} name='address' onChange={this.handleChange} />
                <Form.Button primary content='Salvar' />
            </Form>
        );
    }
}

export default UsuarioEdicao;
