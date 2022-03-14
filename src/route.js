const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enterRoom'}));
route.get('/createRoom', (req, res) => res.render("index", {page: 'createRoom'}));

route.post('/created-room', RoomController.create);
route.get('/room/:room', RoomController.open);

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index);

//route.get('/criarLogin', (req, res) => res.render("criarLogin", {page: 'criarLogin'}));
//route.get('/login', (req, res) => res.render("login", {page: 'login'}));

module.exports = route;