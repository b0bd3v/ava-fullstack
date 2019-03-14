'use strict'
const User = use('App/Models/User')

class UsuarioController {
    async index(){
        const usuarios = User.all()
        return usuarios
    }

    async update({ request }){       
        const usuario = User.where({ _id: request.body._id }).update(
            request.body
        )

        return usuario
    }
}

module.exports = UsuarioController
