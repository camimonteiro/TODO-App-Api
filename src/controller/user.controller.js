const bd = require('../infra/bd');
const User = require ('../model/user.model');

const user = (app) => {
    app.get('/user', function(req, resp) {
      // resp.send('Here user values are read - GET!')
      resp.json({'user': bd.user})
    })
    
    app.post('/user', function(req, resp) {
      // A resposta pode ser feita reservando uma variável e depois chamando ela no campo de resposta.
      // let name = req.body.name;
      // let lastName = req.body.lastName;
      // let age = req.body.age;
      // let email = req.body.email;
      // resp.send('Nome: ' + name + '<br>Sobrenome: ' + lastName + '<br>Idade: ' + age + ' anos' + '<br>E-mail: ' + email)
      try {
        const body = req.body
        const newUser = new User(body.name, body.lastName, body.age, body.email, body.password)
        bd.user.push(newUser)
        console.log(bd.user)
        resp.json({
          'NewUser': newUser,
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

module.exports = user;