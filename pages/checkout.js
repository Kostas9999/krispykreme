
import Link from 'next/link'
import { withIronSessionApiRoute } from "iron-session/next";
import { withIronSessionSsr } from "iron-session/next";
import Navbar from '../templates/navbar';
import { NextUIProvider } from "@nextui-org/react"


export default function Checkout({data}) {
  return (
    <NextUIProvider>
    <Navbar />
  
 
    
    Hello there!
  
   
   <br></br>
   Thanks for the order!
    
   <br></br>
        {JSON.stringify(data)}

        </NextUIProvider>
  )
}







// make a call to the API to get the cart data
// before the page loads



export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {

const cart = req.session.cart;

const data = {cart: cart}

const JSONdata = JSON.stringify(data)
const endpoint = "https:/krispykreme.vercel.app/api/savecart"



 const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json',},
  body: JSONdata,
}


const response = await fetch(endpoint,options);


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