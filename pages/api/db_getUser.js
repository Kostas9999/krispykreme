//require('./db_Clear_db');
import { connection } from './db_Clear_db'

export default function Handler(req, res) {


  connection.query(
    "SELECT * FROM users;",).then((results)=> {
   
      res.status(200).json(results);
    })
  
 
  }
      