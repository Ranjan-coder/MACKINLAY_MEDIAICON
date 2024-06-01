const { signUp, login, logout } = require('../Controller/UserController');
const Route =require('express').Router();


Route.post('/signup', signUp)
Route.post('/login',login)
Route.post('/logout',logout)


module.exports =Route