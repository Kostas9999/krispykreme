

import Link from 'next/link'
import Navbar from '../templates/navbar';
import { NextUIProvider } from "@nextui-org/react"
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import React from "react";
import { Modal, Button, Input, Checkbox } from "@nextui-org/react";
import { Mail } from "../js/Mail";
import { Password } from "../js/Password";

import {useRouter} from 'next/router'


export default function Home({data}) {
  const router = useRouter()

  

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
   
  };
  
  
  return (
<NextUIProvider>
<Navbar />

    <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Krispy Kreme
              </Text>
  
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Items
              </Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>







</NextUIProvider>

    /*
    <>
    <Navbar />
    <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>

            <form onSubmit={handleSubmit}>
               
                  username:
                  <input type="text" id="username" name="username" />
                  
               
                <p></p>
                password:
                  <input type="text" id="password" name="password"/>
                
                <br></br>
                <input type="submit" value="Submit" />
              
              </form>

      </div>


    </>

    */
  )
  
}

