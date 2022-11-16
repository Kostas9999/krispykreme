import Navbar from '../templates/navbar';
import { Button, NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer , Grid} from "@nextui-org/react";
import React from "react";



// import {useRouter} from 'next/router'


export default function Home({data}) {
 // const router = useRouter()

 const list = [
  {
    title: "Donut",
    img: "images/donuts-1.png",
    price: "5.50eur",
  },
  {
    title: "Donut",
    img: "images/donuts-2.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-3.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-4.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-5.png",
    price: "3.00eur",
  },
  {
    title: "Donut 2",
    img: "images/donuts-6.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-7.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-8.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-8.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-7.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-8.png",
    price: "3.00eur",
  },
  {
    title: "Donut",
    img: "images/donuts-8.png",
    price: "3.00eur",
  },
];
  
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
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://filedn.eu/laylI9rT8UjYMnCgviybMrh/KrispyKreme/" + item.img}
                objectFit="cover"
                width="100%"
                height={240}
                alt={item.title}
              />

                <Text
                color="light-blue"
                size={12}
                weight="bold"
                transform="uppercase"
              >
               
              </Text>
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

