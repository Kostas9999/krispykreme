require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default function handler(req, res) {


     const username = req.body.username_Reg;
     const email = req.body.email_Reg;
     const address = req.body.address_Reg;
     const pass = req.body.password_Reg;
 
     
// check if user exist
  
    // simple query
  connection.query(

    //"INSERT INTO `heroku_54b7530745c0825`.`users` (`username`) VALUES ('t');"
    "INSERT INTO `users` (`username`,`email`, `address`, `pass`) VALUES ('"+username+"',  '"+email+"' , '"+address+"', '"+pass+"');",
   ).then((results)=> {
// check if user created

   });

  
  
  
  
  
      
      
  }
      