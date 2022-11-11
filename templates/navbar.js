import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";



export default function App() {
  const [variant, setVariant] = React.useState("sticky");

  const variants = ["static", "floating", "sticky"];
  
  return (
    <Layout>
      <Navbar isBordered variant="static">
        <Navbar.Brand>
         
          <Text b color="inherit" hideIn="xs">
            Krispy Kreme
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="./">Shop</Navbar.Link>
          <Navbar.Link isActive href="#not Set">Customer</Navbar.Link>
          <Navbar.Link href="./manager">Manager</Navbar.Link>
          <Navbar.Link href="./customer">Checkout</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    
    </Layout>
  )
}
