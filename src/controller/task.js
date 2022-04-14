module.exports = (app) => {
    app.get('/task', function(req, respo) {
      respo.send('Here task values are read - GET!')
    })

    app.post('/task', function(req, respo) {
      respo.send('Here task values are entered - POST!')
    })
  }