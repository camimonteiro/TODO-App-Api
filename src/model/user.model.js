var id = 0;
class User {
    constructor(name, lastName, age, email, password){
        this.id = ++id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = this.validarSenha(password);
    }

    validarSenha(password){
        if (password.length <= 5){
            return password;
        } else {
            throw new Error('Password must be up to 5 characters')
        }
    }
}

module.exports = User;