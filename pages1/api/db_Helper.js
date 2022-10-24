const mysql = require('mysql2');

export const connection = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b2c2ebcba0073b',
    password: '9ccac70f',
    port: 3306,
    database: 'heroku_54b7530745c0825'
  });
  //mysql://b2c2ebcba0073b:9ccac70f@eu-cdbr-west-03.cleardb.net/heroku_54b7530745c0825?reconnect=true