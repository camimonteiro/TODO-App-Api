/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose(); // importando o sqlite3
const db = new sqlite3.Database('./database.db');

//==== Usuários
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USERS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "LASTNAME" varchar (100),
    "AGE" INTERGER,
    "EMAIL" varchar(64),
    "PASSWORD" varchar(64)
  );`;

const ADD_USERS_DATA = `
INSERT INTO USERS (ID, NAME, LASTNAME, AGE, EMAIL, PASSWORD)
VALUES 
    (1, 'Eugênio', 'Oliveira', 30, 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia', 'Ribeiro', 25, 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes', 'Faria Lima', 42, 'mirtes_fl@yahoo.com', '********')
`

function createTablesUsr() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function fillTablesUsr() {
    db.run(ADD_USERS_DATA, (error)=> {
       if (error) console.log("Erro ao preencher tabela de usuários");
    });
}


//==== Tarefas
const TASKS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TASKS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITLE VARCHAR(64),
    DESCRIPTION TEXT,
    STATUS VARCHAR(32),
    CREATIONDATE VARCHAR(32),
    ID_USERS INTEGER,
    FOREIGN KEY(ID_USERS) REFERENCES USER(ID)
);`;

const ADD_TASKS_DATA = `INSERT INTO TASKS (TITLE, DESCRIPTION, STATUS, CREATIONDATE, ID_USERS)
VALUES 
       ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
       ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
`

function createTablesTasks() {
    db.run(TASKS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}


function fillTablesTasks() {
    db.run(ADD_TASKS_DATA, (error)=> {
       if (error) console.log("Erro ao preencher tabela de Tarefas");
    });
}

db.serialize( ()=> {
    createTablesUsr();
    fillTablesUsr();
    createTablesTasks();
    fillTablesTasks();
});