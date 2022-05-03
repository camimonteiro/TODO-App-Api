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

    deleteUsers() {

    }

    changeUsers() {

    }
}

module.exports = UserDAO