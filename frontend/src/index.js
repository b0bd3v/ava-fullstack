import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import UsuarioLista from './pages/usuario/lista/UsuarioLista';
import Header from './header/Header';

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" exact={true} component={App} />
            <Route path="/sobre" exact={true} component={Sobre} />
            <Route path="/usuarios" exact={true} component={UsuarioLista} />
        </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
