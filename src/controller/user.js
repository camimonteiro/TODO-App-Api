module.exports = (app) => {
    app.get('/user', function(req, resp) {
      resp.send('Here user values are read - GET!')
    })
    
    app.post('/user', function(req, resp) {
      // A resposta pode ser feita reservando uma variável e depois chamando ela no campo de resposta.
      let name = req.body.name;
      let lastName = req.body.lastName;
      let age = req.body.age;
      let email = req.body.email;
      resp.send('Nome: ' + name + '<br>Sobrenome: ' + lastName + '<br>Idade: ' + age + ' anos' + '<br>E-mail: ' + email)
    })
  }