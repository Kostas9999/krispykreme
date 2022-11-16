import Navbar from '../templates/navbar';
import { NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer , Grid} from "@nextui-org/react";
import React from "react";



// import {useRouter} from 'next/router'


export default function Home({data}) {
 // const router = useRouter()

 const list = [
  {
    title: "Orange",
    img: "images/donuts-1.png",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "images/donuts-2.png",
    price: "$3.00",
  },
  {
    title: "Cherry",
    img: "images/donuts-3.png",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "images/donuts-4.png",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "images/donuts-5.png",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "images/donuts-6.png",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "images/donuts-7.png",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "images/donuts-8.png",
    price: "$12.20",
  },
];
  
  return (
<NextUIProvider>
<Navbar />


    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://filedn.eu/laylI9rT8UjYMnCgviybMrh/KrispyKreme/" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );

</NextUIProvider>

  )
  
}

