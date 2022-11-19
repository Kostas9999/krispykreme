import Navbar from '../templates/navbar';
import { Button, NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer , Grid} from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


async function handleOrderSubmit(event) {

 
  event.preventDefault();


  // grab the variables from the form.

  console.log(event)
  const qty = document.querySelector("#product").value
  const prod_id = document.querySelector("#product").getAttribute("aria-label")


 

   const data = {
    qty: qty,
    prod_id: prod_id,

   }

   // Send the data to the server in JSON format.
   const JSONdata = JSON.stringify(data)

   // API endpoint where we send form data.
   const endpoint = '/api/cart'



   // Form the request for sending data to the server.
   const options = {
     // The method is POST because we are sending data.
     method: 'POST',
     // Tell the server we're sending JSON.
     headers: {
       'Content-Type': 'application/json',
     },
     // Body of the request is the JSON data we created above.
     body: JSONdata,
   }

   

   // Send the form data to our forms API on Vercel and get a response.
   const response = await fetch(endpoint, options)

   const result = await response.json()
   
   alert(result)



}




export default function Home({products}) {

  return (
<NextUIProvider>
<Navbar />

<Container>
      <Card css={{ $$cardColor: '$colors$primary' }}>
      <Card.Body css={{ p: 0 }}>
        
              <Card.Image
                src={"https://filedn.eu/laylI9rT8UjYMnCgviybMrh/KrispyKreme/images/donuts-3.png" }
                objectFit="cover"
                width="100%"
                height={400}
              />
            </Card.Body>
            <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >

<Text
                
                size={20}
                weight="bold"
                transform="uppercase"
              >
               Todays Specials
              </Text>

      </Card.Footer>
      </Card>
    </Container>
  

    <Grid.Container gap={2} justify="flex-start">
      {products.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card >
            <Card.Body css={{ p: 0 }}>

            <Text
                color="light-blue"
                size={12}
                weight="bold"
                transform="uppercase"
              >                
               {item.title}
              </Text>



              <Card.Image
                src={"https://filedn.eu/laylI9rT8UjYMnCgviybMrh/KrispyKreme/images/" + item.img}
                objectFit="cover"
                width="100%"
                height={240}
                alt={item.title}
              />

              
            </Card.Body>
            <Card.Footer

            
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
              <Row wrap="wrap" justify="space-between" align="center">
              {item.price}e

           
              </Row>
     

    <form onSubmit={handleOrderSubmit}>
  
    <Input
        css={{
        
          zIndex: 2,
        }}
        type="number" 
    contentRight
          aria-label= {item.id}
          color="primary" 
          initialValue="1"
          size="xs"         
          id="product">
 </Input>


 
    <Button
              flat
              auto
              rounded
              css={{ color: "primary", bg: "#94f9f026" }}
             type="submit">Add to Cart
              
    </Button>
   

   </form>
 

            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
 

</NextUIProvider>

  )
  
}

export async function getServerSideProps() {
  
  const res = await fetch('https://krispykreme.vercel.app/api/db_getProducts')
 const products = await res.json()

  return { props: { products } }
}