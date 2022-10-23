require('./db_Helper');

import { connection } from './db_Helper'

export default function handler(req, res) {
  
     const username = req.body.username;
     const pass = req.body.password;

     connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected to db!");
    });
   

  connection.query(
    "SELECT * FROM users WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {
     
      // sending back the result.
      if(results.length == 1){res.status(200).json("ok");} 
     else { res.status(200).json("fail");}
     
    }
    
  );

  
   
  }
      