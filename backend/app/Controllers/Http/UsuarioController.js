'use strict'
const User = use('App/Models/User')

class UsuarioController {
    async index(resquest, response){
        const usuarios = User.all()
        return usuarios
    }

    async show({params}){
        const usuario = User.find(params)
        return usuarios
    }
    
    async update(params, request, response){
        console.log(params, request, response);
        
        // const usuario = User.where({ _id: params._id }).update(
        //     params            
        // )

        // return usuario
    }
}

module.exports = UsuarioController
