const axios = require("axios");
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Badge, Avatar, Spacer } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import Navbar from '../templates/navbar';
export default function app(weather) {
  

  let wet_Ico =   `https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/${weather.icon}.png`
  
return (
    

    <Grid.Container>

    <Spacer y={0.5} />
    <Grid.Container gap={1}>
    
      <Grid>
        <Badge disableOutline content={weather.temperature}c size="xl">
          <Avatar
            squared
            size="lg"
            src= {wet_Ico}
          />
        </Badge>
      </Grid>
    </Grid.Container>
  </Grid.Container>


   );
   
}

export async function getServerSideProps() {
    const options = {
        "method": "GET",

        "url": "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=53.3&lng=-6.2&units=si",
        "headers": {
            "x-api-key": "657be8dfc0cdd842c2e6c29b106f056b8f63aa409392ac6a7b8c0bdae54032be",
            "Content-type": "application/json"
        }
    };

let w = await axios.request(options);
let weather = w.data.data;

    return { props: weather}
  }


