import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { Modal,  Input, Checkbox } from "@nextui-org/react";
import lnk from 'next/link'
import { Mail } from "../js/Mail";
import { Password } from "../js/Password";
import {useRouter} from 'next/router'
const axios = require("axios");
import {  Grid, } from "@nextui-org/react";
import { Badge, Avatar, Spacer } from "@nextui-org/react";



export default function App() {

  async function weatherCall() {
    const response = await fetch("api/weather");
 
// Get the response data from server as JSON.
const weather = await response.json();
const wet_Ico =   `https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/${weather.icon}.png`
document.querySelector('#weatherBadge').textContent =weather.temperature
const img = document.querySelector('#weatherAvatar').childNodes[1].src = wet_Ico

  }



weatherCall()



  const router = useRouter()


 //const wet_Ico =   `https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/${weather.icon}.png`

  async function handleSubmit_Reg(event) {

    event.preventDefault();

    const name_Reg = document.querySelector('#username_Reg').value
    const mail_Reg = document.querySelector('#email_Reg').value
    const address_Reg = document.querySelector('#address_Reg').value
    const pass_Reg = document.querySelector('#password_Reg').value

    const data_Reg = {
      username_Reg: event.target.username_Reg.value,
      email_Reg: event.target.email_Reg.value,
      address_Reg: event.target.address_Reg.value,
      password_Reg: event.target.password_Reg.value,
    }

    const JSONdata = JSON.stringify(data_Reg)

    const endpoint = '/api/db_Register'
   

    const options = {
      method: 'POST',        // The method is POST because we are sending data.
      headers: { 'Content-Type': 'application/json'  },// Tell the server we're sending JSON.
      body: JSONdata, // Body of the request is the JSON data we created above.
    }

    const response = await fetch(endpoint, options);
 
    // Get the response data from server as JSON.
    const result = await response.json();

  }

  async function handleSubmit_Login(event) {
   
    
    event.preventDefault();

    const name = document.querySelector('#username').value
    const pass = document.querySelector('#password').value
    
     const data = {
       username: event.target.username.value,
       password: event.target.password.value,
     }

   
     
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



     // redirect based on the result
  if(result == "admin"){ 

   

    router.push("/manager");
  }
  if(result == "user"){ router.push("/customer");}
 
}



  //const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];


  
  const [visible_Login, setVisible_Login] = React.useState(false);
  const [visible_Reg, setVisible_Reg] = React.useState(false);

  const handler_Login = () => setVisible_Login(true);
  const handler_Reg = () => setVisible_Reg(true);

  const closeHandler_Login = () => { setVisible_Login(false);};
  const closeHandler_Reg = () => { setVisible_Reg(false);};
  
  return (







    
    <Layout>
      <Navbar variant="sticky">
        <Navbar.Brand>
        <Navbar.Content hideIn="xs">

        <Grid >
    <Badge id= "weatherBadge"
    disableOutline content="t" size="20">
      <Avatar id= "weatherAvatar"
        rounded
        size="lg"
        src= " "
      />
    </Badge>
  </Grid>

          <Navbar.Link isActive  href="./"> 
          <Text size={35}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
       
      >
        Krispy Kreme
      </Text>
            </Navbar.Link>
            <Grid.Container>

<Spacer y={0.5} />
<Grid.Container gap={1}>

 
</Grid.Container>
</Grid.Container>
        </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link block  href="./">Shop</Navbar.Link>
          <Navbar.Link block href="./checkout">checkout</Navbar.Link>
          <Navbar.Link block href="./manager">Manager</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>



        <Button  id="login"  auto shadow onPress={handler_Login}>
        Login
      </Button>


      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible_Login}
        onClose={closeHandler_Login}
      >
     
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Login <br></br>
            <Text b size={24}>
              Krispy Kreme
            </Text>
          </Text>
        </Modal.Header>

        <form onSubmit={handleSubmit_Login}>
        <Modal.Body> 
   
          <Input
          aria-label="Username"
          id="username"
          name="username"
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
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
            size="sm"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />


        </Modal.Body>
        <Modal.Footer>

          <Button auto flat color="error" onPress={closeHandler_Login}>
            Close
          </Button>


          <Button type="submit_Login" auto>
            Sign in
          </Button>
        
        </Modal.Footer>
        </form>
      </Modal>


<Modal    
     closeButton
     blur
     aria-labelledby="modal-title_Reg"
     open={visible_Reg}
     onClose={closeHandler_Reg}>


<Modal.Header>
          <Text id="modal-title_Reg" size={18}>
            Register <br></br>
            <Text b size={24}>
              Krispy Kreme
            </Text>
          </Text>
        </Modal.Header>



        <form onSubmit={handleSubmit_Reg}>
        <Modal.Body> 
   
          <Input
          aria-label="username_Reg"
          id="username_Reg"
          name="username_Reg"
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Username"
            contentLeft={<Mail fill="currentColor" />}
          />

<Input
          aria-label="email_Reg"
          id="email_Reg"
          name="email_Reg"
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />

<Input
          aria-label="address_Reg"
          id="address_Reg"
          name="address_Reg"
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Address"
            contentLeft={<Mail fill="currentColor" />}
          />
 
          <Input
          aria-label="password_Reg"
          id="password_Reg"
          name="password_Reg"
            clearable
            bordered
            fullWidth
            color="primary"
            size="sm"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />


        </Modal.Body>
        <Modal.Footer>

          <Button auto flat color="error" onPress={closeHandler_Reg}>
            Close
          </Button>


          <Button type="submit_Reg" auto>
            Register
          </Button>
        
        </Modal.Footer>
        </form>
  
</Modal>


          <Navbar.Item>
          <Button  id="Register"  auto shadow onPress={handler_Reg}>
        Register
      </Button>




          </Navbar.Item>

        </Navbar.Content>
      </Navbar>
    
    </Layout>
  )
}
