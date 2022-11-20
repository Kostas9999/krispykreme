require('./db_Clear_db');

import { connection } from './db_Clear_db'

export default    function handler(req, res) {


     const productID = req.body.productID;
     const quantity = req.body.quantity;
  
     

  connection.query(
  "INSERT INTO `cart` (`productID`,`quantity`) VALUES ('"+productID+"', '"+quantity+"');",
   ).then((results)=> {

    console.log(  `Order number:  ${results.insertId}`)

    res.status(200).json( `Order number:  ${results.insertId}`)
   
   });

  
  
  
  
  
      
      
  }
      