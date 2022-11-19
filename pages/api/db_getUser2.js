//require('./db_Clear_db');

import { connection } from './db_Clear_db'


  connection.query(
    "SELECT * FROM users;",(req, results)=> {
      console.log(e)
      res.status(200).json(results);
    });



  

    
 
      