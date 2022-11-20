const axios = require("axios");
let wet;

export default  async function app(req,res) {
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

res.status(200).json(weather);
   
}



