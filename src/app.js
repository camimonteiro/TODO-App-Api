const express = require('express'); //importando o express
const app = express(); //instanciando
const port = 3000; //porta do servidor

// body-parser - middleware - "pacote" que permite que você edite o body
app.use(express.json())

// importação dos módulos criados
const task = require('./controller/task');
const user = require('./controller/user');

//rodar servidor na porta indicada
app.listen(port, function() {
  console.log('Online! rodando na porta 3000');
})

task(app);
user(app);