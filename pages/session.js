
import Link from 'next/link'
import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";
import Navbar from '../templates/navbar';
import { NextUIProvider } from "@nextui-org/react"


export default  function Checkout({data}) {


  return (
  
  
 
    <> {JSON.stringify(data)}</>
 
      
      

       
  )
}





export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    
   
  





    return {
      
      props: {
        data: req.session.cart,
        
      },
   
    };
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