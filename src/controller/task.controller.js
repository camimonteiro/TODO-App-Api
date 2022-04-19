const bd = require ('../infra/bd');
const Task = require ('../model/task.model');

const task = (app) => {
    app.get('/task', function(req, resp) {
      // resp.send('Here task values are read - GET!')
      resp.json ({'task': bd.task})
    })

    app.post('/task', function(req, resp) {
      // A resposta também pode ser feita chamando toda a variável: req.body.xxxx
      // resp.send('ID da tarefa: ' + req.body.id + '<br> Prioridade: ' + req.body.priority)
      try {
        const body = req.body; // variavel que recebe o body
        const newTask = new Task(body.title, body.description, body.status, body.creationDate); // passando para o meu modelo o meu body
        
        bd.task.push(newTask) // inserção da minha entidade no array
        console.log(bd.task)
        
        resp.json({
          'NewTask': newTask,
          'erro': false
        })
      } catch (error) {
          resp.json({
            'message': error,
            'erro': true
          })
        }
    })
  }

  module.exports = task;