//require('./db_Clear_db');
import { connection } from './db_Clear_db'

export default function Handler(req, res) {

 
  
     const username = req.body.username;
     const pass = req.body.password;
 

  connection.query(
    "SELECT * FROM users WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",)
    .then((results)=> {
    if(results.length == 1){res.status(200).json("ok");} 
    else { res.status(200).json("fail");}
  
  });
 
  }
      