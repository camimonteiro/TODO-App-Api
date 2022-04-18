module.exports = (app) => {
    app.get('/task', function(req, resp) {
      resp.send('Here task values are read - GET!')
    })

    app.post('/task', function(req, resp) {
      // A resposta também pode ser feita chamando toda a variável: req.body.xxxx
      resp.send('ID da tarefa: ' + req.body.id + '<br> Prioridade: ' + req.body.priority)
    })
  }