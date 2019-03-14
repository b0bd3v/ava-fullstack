import React, { Component } from 'react';
import logo from './logo.png';
import './Header.scss';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


class Header extends Component {
    
    state = {}

    handlerMenuClick = (e, {name}) => {
        this.setState({
            itemAtivo: name,
            mudouRota: true,
            novaRota: '/' + name
        }) 
    }

    render() {
        const { itemAtivo } = this.state 
        
        if(this.state.mudouRota === true){
            this.setState({
                mudouRota: false
            })
            return <Redirect to={this.state.novaRota} />
        }
        
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header name="home" onClick={this.handlerMenuClick}>
                        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                        Controle usuários
                    </Menu.Item>
                    <Menu.Item as='a' name="home" active={itemAtivo === 'home'} onClick={this.handlerMenuClick}>Home</Menu.Item>
                    <Menu.Item as='a' name="usuarios" active={itemAtivo === 'usuarios'} onClick={this.handlerMenuClick}>Usuários</Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default Header;
