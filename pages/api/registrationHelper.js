require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default function handler(req, res) {

     const username = req.body.username;
     const pass = req.body.pass;
     const address = req.body.address;
     const email = req.body.email;


    

     connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  
    // simple query
  connection.query(

 
    "INSERT INTO `users` (`username`,`email`, `address`, `pass`) VALUES ('"+username+"',  '"+email+"' , '"+address+"', '"+pass+"');",
   );

  
  
  
  
  
      
      
  }
      