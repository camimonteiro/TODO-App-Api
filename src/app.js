const express = require('express'); //importando o express
const app = express(); //instanciando
const port = 3000;

const task = require('./controller/task');
const user = require('./controller/user');

//rodar servidor na porta indicada
app.listen(port, function() {
  console.log('Online! rodando na porta 3000');
})

task(app);
user(app);