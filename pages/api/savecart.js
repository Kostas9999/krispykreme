require('./db_Clear_db');
import { withIronSessionSsr } from "iron-session/next";

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
  export const getServerSideProps = withIronSessionSsr(
   async function getServerSideProps({ req }) {
     
    req.session.destroy()
   
   }, // -------------------- All boilerplate code for sessions ------------------------------------
   {
     cookieName: "myapp_cookiename",
     password: "complex_password_at_least_32_characters_long",
     // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
     cookieOptions: {
       secure: process.env.NODE_ENV === "production",
     },
   },
 );