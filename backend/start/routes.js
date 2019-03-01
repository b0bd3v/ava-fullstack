'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')

Route.get('/', () => {
  return { greeting: 'Sistema de avaliação Iconic.' }
})

// Listagem de usuários.
Route.get('/usuarios', 'UsuarioController.index')
Route.get('/usuario/{id}', 'UsuarioController.show')
Route.put('/usuario', 'UsuarioController.update')
