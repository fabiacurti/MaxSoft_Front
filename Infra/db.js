const sql = require('mssql');

const config = {
    user: 'DESKTOP-J2463JH\fabiacurti',
    password: '',
    server: 'DESKTOP-J2463JH\\SQLEXPRESS',
    database: 'Maxsoft',
    options: {
        encrypt: false,
        connectionTimeout: 30000,
    },
};

const pool = new sql.ConnectionPool(config);

pool.connect()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida.');

        // Consulta de exemplo
        return pool.request().query('SELECT * FROM AlunosProfessores');
    })
    .then((result) => {
        console.log('Resultados da consulta:', result.recordset);
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
