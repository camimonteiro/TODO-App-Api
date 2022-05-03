const User = require('../src/model/user.model');

test ('Testando Modelo', ()=> {
    expect(() => {
        const newUser = new User ("camille", "monteiro", 31, "camillemonteiro.dev@gmail.com")
    }).toThrow()
})