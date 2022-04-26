// const res = require('express/lib/response');
// const bd = require('../infra/sqlite-db');
// const User = require ('../model/user.model');

const user = (app, bd) => {
    app.get('/user', function(req, resp) {
      bd.all('SELECT * FROM USERS', (error, rows)=>{
        if (error) {
          resp.json('ERROR SELECTING DATABASE')
        } else {
          resp.json({'AVAILABLE USER DATABASE': rows})
        }
      })

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
          'NewUser': newUser
        })
      } catch (error) {
          resp.json({
            'message': error
          })
        }
    })
      
    // para filtrar pelos parâmetros (/user/:name/:....)
    app.get('/user/:name/:lastName/:age/:email', function (req, resp) {
      resp.json({"name": req.params.name,
        "lastName": req.params.lastName,
        "age": req.params.age,
        "email": req.params.email
      })
    })

    app.post('/user/:name/:lastName/:age/:email', function (req, resp) {
      const name = req.params.name;
      const lastName = req.params.lastName;
      const age = req.params.age;
      const email = req.params.email;
      bd.user.push(req.params)
      resp.send(`O nome do usuário é ${name} ${lastName}. O usuário tem ${age} anos e seu e-mail é ${email}`)
    })

    // verbo delete - para excluir dados do banco de dados
    app.delete('/user/:name/:lastName', function (req, resp) {
      const nameParams = req.params.name;
      const lastNameParams = req.params.lastName;
      const indexUser = bd.user.findIndex(user => user.name == nameParams && user.lastName == lastNameParams);

      if(indexUser > -1){
        const userDeleted = bd.user.splice(indexUser, 1)
        resp.json({'UserDeleted': userDeleted})
      } else { 
        resp.json('User not find')
      }

    })
    
    // Método de Update - atualização dos dados do banco
    app.put('/user/:name/:lastName', function (req, resp) {
      const nameParams = req.params.name;
      const lastNameParams = req.params.lastName;
      const body = req.body;
      const indexUser = bd.user.findIndex(user => user.name == nameParams && user.lastName == lastNameParams);

      if(indexUser > -1){
        const oldUserData = bd.user[indexUser];
        const newUserData = new User(
          body.name || oldUserData.name,
          body.lastName || oldUserData.lastName,
          body.age || oldUserData.age,
          body.email || oldUserData.email,
          body.password || oldUserData.password,
          oldUserData.id
          );
        const change = bd.user.splice(indexUser, 1, newUserData);

        resp.json({
          'UserChanged': newUserData,
          'UserDeleted': change
        })
      } else { 
        resp.json('User not find')
      }
    })
}

module.exports = user;