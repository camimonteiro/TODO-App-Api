import express from 'express';
let app = express()

// verbo http
app.get('/', function(req, respo) {
  respo.send('Estamos online, bora!')
})

app.post('/', function(req, respo) {
  respo.send('Testando')
})

// rodar servidor na porta
app.listen(3000,() => {
  console.log('Online! rodando na porta 3000')
})