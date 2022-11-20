import { withIronSessionApiRoute } from "iron-session/next";
var ses=[];
export default withIronSessionApiRoute(
    async function customer(req, res) {

     var qty = req.body.qty;
     var prod_id = req.body.prod_id;


    
    ses.push({ 
      productID: prod_id,
     quantity: qty      
    });

      req.session.cart = ses;
  
     
      
      await req.session.save();

     console.log(`Cart is saved to session!!!`)
     console.log(req.session.cart)
     res.status(200).json("cart updated!!")

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
