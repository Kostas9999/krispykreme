require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default function handler(req, res) {

     const username = req.body.username;
     const pass = req.body.pass;
     const address = req.body.address;
     const email = req.body.email;

  
    // simple query
  connection.query(

    //"INSERT INTO `heroku_54b7530745c0825`.`users` (`username`) VALUES ('t');"
    "INSERT INTO `users` (`username`,`email`, `address`, `pass`) VALUES ('"+username+"',  '"+email+"' , '"+address+"', '"+pass+"');",
   );

  
  
  
  
  
      
      
  }
      