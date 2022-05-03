const bd = require('../infra/sqlite-db');
const User = require ('../model/user.model');
const UserDAO = require ('../DAO/user.dao');

const user = (app, bd) => {
  const InstUserDAO = new UserDAO (bd) // instanciando o UserDAO
    
  app.get('/user', function(req, resp) {
    const data = async () => {
      try {
        const user = await InstUserDAO.listUsers();
        resp.send(user)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })
    
  app.post('/user', function(req, resp) {
    const body = req.body;
    const newUser = new User(body.name, body.lastName, body.age, body.email, body.password);
    const data = async() => {
      try {
        const user = InstUserDAO.insertUsers(newUser);
        resp.send(user)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })
      
    // para filtrar pelos parâmetros (/user/:name/:....)
    app.get('/user/:id', (req, resp) => {
      const data = async() => {
        try {
          const user = InstUserDAO.listUsersID(req.params.id);
          resp.send(user)
        } catch (error) {
          resp.send(error)
        }
      }
      data()
    })

    // app.post('/user/:name/:lastName/:age/:email', function (req, resp) {
    //   const name = req.params.name;
    //   const lastName = req.params.lastName;
    //   const age = req.params.age;
    //   const email = req.params.email;
    //   bd.user.push(req.params)
    //   resp.send(`O nome do usuário é ${name} ${lastName}. O usuário tem ${age} anos e seu e-mail é ${email}`)
    // })

    // verbo delete - para excluir dados do banco de dados
    app.delete('/user/:id', (req, resp) => {
      const data = async() => {
        try {
          const users = InstUserDAO.deleteUsers(req.params.id);
          resp.send(users)
        } catch (error) {
          resp.send(error)
        }
      }
      data()
    })
    
    // Método de Update - atualização dos dados do banco
    app.put('/user/:id', (req, resp) => {
      const body = req.body;
      const id = req.params.id;
      const params = [body.name, body.lastName, body.age, body.email, body.password, id]
      const data = async() => {
        try {
          const users = await InstUserDAO.changeUsers(params);
          resp.send(users)
        } catch (error) {
          resp.send(error)
        }
      }
      data()
    })
}

module.exports = user;