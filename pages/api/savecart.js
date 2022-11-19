require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default  function handler(req, res) {


     const productID = req.body.cart.productID;
     const quantity = req.body.cart.quantity;
  
     
// check if user exist
  
    // simple query
  connection.query(

   
    "INSERT INTO `cart` (`productID`,`quantity`) VALUES ('"+productID+"', '"+quantity+"');",
   ).then((results)=> {


   });

  
  
  
  
  
      
      
  }
      