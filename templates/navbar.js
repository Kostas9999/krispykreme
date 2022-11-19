import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { Modal,  Input, Checkbox } from "@nextui-org/react";
import lnk from 'next/link'
import { Mail } from "../js/Mail";
import { Password } from "../js/Password";
import {useRouter} from 'next/router'

export default function App() {

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

     const endpoint = '/api/db_Login'


     const options = {
       method: 'POST',        // The method is POST because we are sending data.
       headers: { 'Content-Type': 'application/json'  },// Tell the server we're sending JSON.
       body: JSONdata, // Body of the request is the JSON data we created above.
     }


     const response = await fetch(endpoint, options);
 
     // Get the response data from server as JSON.
     const result = await response.json();
  // alert(`server result: ${result}`);

 // document.getElementById("login").style.display="none";

     // redirect based on the result
  if(result == "admin"){ 

   

    router.push("/manager");
  }
  if(result == "user"){ router.push("/customer");}
 
}



  const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];


  
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
   
  };
  
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive  href="./"> 
          <Text size={35}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
       
      >
        Krispy Kreme
      </Text>
            </Navbar.Link>
          
        </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link block  href="./">Shop</Navbar.Link>
          <Navbar.Link block href="./">Customer</Navbar.Link>
          <Navbar.Link block href="./manager">Manager</Navbar.Link>
          <Navbar.Link block href="./customer">Cart</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>



        <Button  id="login"  auto shadow onPress={handler}>
        Login
      </Button>


      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
     
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <br></br>
            <Text b size={24}>
              Krispy Kreme
            </Text>
          </Text>
        </Modal.Header>

        <form onSubmit={handleSubmit}>
        <Modal.Body> 
   
          <Input
          aria-label="Username"
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
          aria-label="password"
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

          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>


          <Button type="submit" auto>
            Sign in
          </Button>
        
        </Modal.Footer>
        </form>
      </Modal>



          <Navbar.Item>
            <Button auto flat as={Link} href="./register">
              Sign Up
            </Button>
          </Navbar.Item>







        </Navbar.Content>
      </Navbar>
    
    </Layout>
  )
}
