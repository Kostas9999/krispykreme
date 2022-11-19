import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
    async function customer(req, res) {
      
     // get the variables that were sent over
     var qty = req.body.qty;
     var prod_id = req.body.prod_id;

     // add the items to the cart object.
      req.session.cart = {
        quantity: qty,
        productID: prod_id
       
      };
      await req.session.save();

      // send back a message that it went to plan!
      res.status(200).json("Quantity: " + qty + "\nProduct_ID: " + prod_id);


    },
    {
      cookieName: "myapp_cookiename",
      password: "complex_password_at_least_32_characters_long",
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    },
  );
