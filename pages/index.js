import Navbar from '../templates/navbar';
import { Button, NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer , Grid} from "@nextui-org/react";
import React from "react";




export default function Home({products}) {


  return (
<NextUIProvider>


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
          <Card isPressable>
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
              {item.price}

              <Button
              flat
              auto
              rounded
              css={{ color: "primary", bg: "#94f9f026" }}
            >
              <Text
                color="blue"
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Add to Cart 
              </Text>
            </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
 

</NextUIProvider>

  )
  
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/db_getProducts')
  const products = await res.json()

  //let products = [{"productID":1,"title":"Donut","price":0.1,"img":"donuts-1.png","description":"desc"},]

  // Pass data to the page via props
  return { props: { products } }
}