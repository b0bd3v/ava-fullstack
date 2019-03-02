import React, { Component } from 'react';
import './UsuarioEdicao.scss';
import { Form } from 'semantic-ui-react';
import Moment from 'moment';
import MaskedField from 'react-masked-field';
import axios from 'axios';


class UsuarioEdicao extends Component {

    state = {
        usuario: {
            username: null,
            firstname: null,
            lastname: null,
            email: null,
            phoneNumber: null,
            birthdate: null,
            document: null,
            address: null
        },
        formErrors: []
    }
    
    componentWillMount(){
        this.setState({
            usuario: this.props.usuario.info
        })
    }

    /**
     * Evento de submit do formulário.
     */
    handleSubmit = () => {
        let data = this.state;
        
        if(this.dataValidation(data.usuario)){
            data.usuario.document = data.usuario.document.replace(/[^\w\s]/gi, '');
            
            if(!Moment(data.usuario.birthdate).isValid()){
                data.usuario.birthdate = Moment(data.usuario.birthdate, 'DD/MM/YYYY').format();
            }
            
            axios.put('http://localhost:3333/usuario',
                {
                    _id: this.props.usuario._id,
                    info: data.usuario
                })
                .then(response => {
                    this.props.callbackParent(true);
                    this.props.callbackSubmit();
                    this.props.updateSuccess(data.usuario.firstname);
                });
        }

    }

    /**
     * Validação de dados do formuláro.
     * @param data 
     */
    dataValidation(data){
        
        let formErrors = [];
        
        if(!Moment(data.birthdate, 'DD/MM/YYYY').isValid() && !Moment(data.birthdate).isValid()){
            formErrors.push('Data de nascimento é inválida.')
        }

        if(formErrors.length > 0){
            this.setState({
                formErrors
            })
            return false;
        }

        return true;
    }
    
    /**
     * Evento de mudança de valores de campos do formulário.
     */
    handleChange = (e, { name, value }) => {
        let usuario = this.state.usuario;
        usuario[name] = value;
        return this.setState({ usuario })
    }

    /**
     * Evento de inserção da data no campo de data de nascimento.
     * @param date 
     */
    setBirthDate(date){
        let usuario = this.state.usuario;
        usuario.birthdate = date;
        this.setState({ usuario });
    }
    
    /**
     * Evento de mudança de valor no campo de CPF.
     * @param document 
     */
    setDocument(document){
        let usuario = this.state.usuario;
        usuario.document = document;
        this.setState({ usuario });
    }

    render() {
        const { usuario, formErrors } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                {formErrors.length > 0 &&
                    <div className='formErrors'>
                        {formErrors.map((text) => {
                            return (<p>{text}</p>)
                        })}
                    </div>
                }

                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Nome de usuário' placeholder='Nome de usuário' name='username' onChange={this.handleChange} value={usuario.username} />
                    <Form.Input required fluid label='Primeiro Nome' placeholder='Primeiro Nome' name='firstname' onChange={this.handleChange} value={usuario.firstname} />
                    <Form.Input required fluid label='Segundo Nome' placeholder='Segundo Nome' name='lastname' onChange={this.handleChange} value={usuario.lastname} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='E-mail' placeholder='E-mail' name='email' onChange={this.handleChange} value={usuario.email} />
                    <Form.Input required fluid label='Telefone' placeholder='Telefone' name='phoneNumber' onChange={this.handleChange} value={usuario.phoneNumber} />
                    <Form.Field required>
                        <label>Data de nascimento</label>
                        <MaskedField required mask="99/99/9999" value={Moment(usuario.birthdate).format("DD/MM/YYYY")} onComplete={(date) => this.setBirthDate(date)}/>
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required>
                        <label>Cpf</label>
                        <MaskedField required mask="999.999.999-99" value={usuario.document} onComplete={(document) => this.setDocument(document)}/>
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Endereço' placeholder='...' value={usuario.address} name='address' onChange={this.handleChange} />
                <Form.Button primary content='Salvar' />
            </Form>
        );
    }
}

export default UsuarioEdicao;
