import {useRouter} from 'next/router'

export default function handler(req, res) {
 
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
    const address = req.body.address;
    const email = req.body.email;
     
    res.status(200).json("ok");
    
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

 
    "INSERT INTO `assignment1`.`user` (`username`,`email`, `address`, `pass`) VALUES ('"+username+"',  '"+email+"' , '"+address+"', '"+pass+"');",
    function(err, results, fields) {
   
    res.status(200).json("ok");
    router.push("/customer");

    });

  
  
  
  
  
      
      
  }
      