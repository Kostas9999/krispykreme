require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default function handler(req, res) {


     const productID = req.body.cart;
     //const email = req.body.email_Reg;
  
 
  connection.query(

   
    "INSERT INTO `cart` (`productID`) VALUES ('"+productID+"');",
   ).then((results)=> {


   });

  
  
  
  
  
      
      
  }
      