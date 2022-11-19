import Navbar from '../templates/navbar';
import { Button, NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer , Grid} from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


async function handleOrderSubmit(event) {

 
  event.preventDefault();

  console.log(event)
  const qty = document.querySelector("#product").value
  const prod_id = document.querySelector("#product").getAttribute("aria-label")


   const data = {
    qty: qty,
    prod_id: prod_id,
   }

   const JSONdata = JSON.stringify(data)


   const endpoint = '/api/checkout'


   const options = {
     method: 'POST',
     headers: {'Content-Type': 'application/json',},
     body: JSONdata,
   }

   const response = await fetch(endpoint, options)

   const result = await response.json()
   
 
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