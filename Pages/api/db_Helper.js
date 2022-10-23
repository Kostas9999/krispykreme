const mysql = require('mysql2');

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'assignment1'
  });