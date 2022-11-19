//require('./db_Clear_db');
import { connection } from './db_Clear_db'

export default function Handler(res, response) {


  connection.query(
    "SELECT * FROM products;",).then((results)=> {
     
      response.status(200).json(results);
    })
  
 
  }
      