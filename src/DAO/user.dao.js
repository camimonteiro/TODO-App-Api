class UserDAO {
    constructor(bd) {
        this.bd = bd
    }

    listUsers() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USERS', (error, rows) => {
                if (error) {
                    reject('ERROR SELECTING DATABASE')
                } else {
                    resolve({ 'AVAILABLE USER DATABASE': rows })
                }
            })
        })
    }

    listUsersID(id) {
        return new Promise ((resolve, reject) => {
            this.bd.all (`SELECT * FROM USERS WHERE ID=${id}`, (error, results) => {
                if (error) {
                    reject (error)
                } else {
                    resolve (results)
                }
            })
        })
    }

    insertUsers(dataNewUsers) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO USERS (NAME, LASTNAME, AGE, EMAIL, PASSWORD) VALUES (?,?,?,?,?)`,
                [dataNewUsers.name, dataNewUsers.lastName, dataNewUsers.age, dataNewUsers.email, dataNewUsers.password],
                (error) => {
                    if (error) {
                        reject('ERROR IN ENTERING DATA INTO THE DATABASE')
                    } else {
                        resolve('DEU CERTO INSERIR')
                    }
                })
            })
    }

    deleteUsers(id) {
        return new Promise ((resolve, reject) => {
            this.bd.run(`DELETE FROM USERS WHERE ID=${id}`, (error) => {
                if (error) {
                    reject (error)
                } else {
                    resolve ('User deleted!')
                }
            })
        })
    }

    changeUsers(parametros) {
        return new Promise ((resolve, reject) => {
            console.log(parametros)
            this.bd.run(`UPDATE USERS SET NAME = ?, LASTNAME = ?, AGE = ?, EMAIL = ?, PASSWORD = ? WHERE ID = ?`, parametros, (error) => {
                if (error) {
                    console.log(error)
                    reject (error)
                } else {
                    resolve ('Update done!')
                }
            })
        })
    }
}

module.exports = UserDAO