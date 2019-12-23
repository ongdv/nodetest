const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

module.exports = pool;