const express = require('express'); //importando o express
const cors = require('cors'); // importando o cors
const app = express(); //instanciando
const port = process.env.PORT || 3000; //porta do servidor

// body-parser - middleware - "pacote" que permite que você edite o body
app.use(express.json())
app.use(cors());

app.post('/user', function (req, resp, next) {
  resp.json({msg: 'This is CORS-enabled for all origins!'})
})

app.put('/user/:id', function (req, resp, next) {
  resp.json({msg: 'This is CORS-enabled for all origins!'})
})

app.delete('/user/:id', function (req, resp, next) {
  resp.json({msg: 'This is CORS-enabled for all origins!'})
})

// importação dos controllers criados (User e Task Controller)
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');

// importação dos modelos criados (User e Task Models)
const userModel = require('./model/user.model');
const taskModel = require('./model/task.model');

// importação do banco de dados criado
const bd = require('./infra/sqlite-db');

taskController(app, bd);
userController(app, bd);

// código pra colar no navegador
// fetch("http://localhost:3000/user")
//     .then((response) => {
//       return response.json()
//     }).then((data) => {
//       console.log(data)
//     })

//rodar servidor na porta indicada
app.listen(port, function() {
  console.log('Online! rodando na porta 3000');
})

