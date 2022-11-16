

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

  async function handleSubmit(event) {
      
    
       event.preventDefault();

       const name = document.querySelector('#username').value
       const pass = document.querySelector('#password').value
       
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }

        //te
        
        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/db'
   

        const options = {
          method: 'POST',        // The method is POST because we are sending data.
          headers: { 'Content-Type': 'application/json'  },// Tell the server we're sending JSON.
          body: JSONdata, // Body of the request is the JSON data we created above.
        }


        const response = await fetch(endpoint, options);
    
        // Get the response data from server as JSON.
        const result = await response.json();
     alert(`server result: ${result}`);

        // redirect based on the result
     if(result == "admin"){ router.push("/manager");}
     if(result == "user"){ router.push("/customer");}
    
  }



  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  
  
  return (
<NextUIProvider>


    <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Krispy Kreme
              </Text>

              

              <div>
      <Button auto shadow onClick={handler}>
        Login
      </Button>

   

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
     
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <br></br>
            <Text b size={18}>
              Krispy Kreme
            </Text>
          </Text>
        </Modal.Header>

        <form onSubmit={handleSubmit}>
        <Modal.Body> 
          <Input
          id="username"
          name="username"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
          id="password"
          name="password"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />


        </Modal.Body>
        <Modal.Footer>

          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>


          <Button type="submit" auto>
            Sign in
          </Button>
        
        </Modal.Footer>
        </form>
      </Modal>
     
    </div>
  
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

