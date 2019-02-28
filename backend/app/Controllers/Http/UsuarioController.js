'use strict'
const User = use('App/Models/User')

class UsuarioController {
    index(resquest, response){
        const usuarios = User.all()
        return usuarios
    }
}

module.exports = UsuarioController
