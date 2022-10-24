require('./app');

import { connection } from './app'
//connection.connect();
export default function Handler(req, res) {
  
     const username = req.body.username;
     const pass = req.body.password;
 

  connection.query(
    "SELECT * FROM users WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {
     
      if(err){throw err;}

      if(results.length == 1){res.status(200).json("ok");} 
     else { res.status(200).json("fail");}

      // sending back the result.
     if(results.length == 1){res.status(200).json("ok");} 
     else { res.status(200).json("fail");}
     
    }
    
  );
 
  }
      