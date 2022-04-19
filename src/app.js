const express = require('express'); //importando o express
const app = express(); //instanciando
const port = 3000; //porta do servidor

// body-parser - middleware - "pacote" que permite que você edite o body
app.use(express.json())

// importação dos controllers criados (User e Task Controller)
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');

// importação dos modelos criados (User e Task Models)
const userModel = require('./model/user.model');
const taskModel = require('./model/task.model');

// importação do banco de dados criado
const bd = require('./infra/bd');

taskController(app, bd);
userController(app, bd);

//rodar servidor na porta indicada
app.listen(port, function() {
  console.log('Online! rodando na porta 3000');
})

