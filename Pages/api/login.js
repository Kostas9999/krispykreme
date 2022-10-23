

export default function handler(req, res) {

  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
   
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      port: 3306,
      database: 'assignment1'
    });
  
  
    // simple query
  connection.query(
    "SELECT * FROM user WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {

     
   
      // sending back the result.
      if(results.length == 1){
        console.log(results);
        res.status(200).json("ok");
      } 
      else {res.status(200).json("fail");}
     
    }
  );
  
  
  
  
  
  
  
      
      
  }
      