const mysql = require('mysql2');

export const connection = mysql.createConnection({
    host: '185.38.61.93',
    user: 'MGproject',
    password: 'F37E28sINiKukaNegu4uzIDu3I7iXe',
    port: 3306,
    database: 'krispykreme'
  });
  //mysql://b2c2ebcba0073b:9ccac70f@eu-cdbr-west-03.cleardb.net/heroku_54b7530745c0825?reconnect=true