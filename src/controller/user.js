module.exports = (app) => {
    app.get('/user', function(req, respo) {
      respo.send('Here user values are read - GET!')
    })

    app.post('/user', function(req, respo) {
      respo.send('Here user values are entered - POST!')
    })
  }