import React, { Component } from 'react';
import logo from './logo.png';
import './Header.scss';
import { Menu, Container, Image } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                        Controle usuários
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Usuários</Menu.Item>
                    <Menu.Item as='a'>Sobre</Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default Header;
