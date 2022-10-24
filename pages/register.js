import Link from 'next/link'



async function HandleSubmit(event) {


  event.preventDefault();


  const name = document.querySelector('#username').value
  const pass = document.querySelector('#password').value
  const address = document.querySelector('#address').value
  const email = document.querySelector('#email').value

 //
  
   const data = {
    username: event.target.username.value,
     pass: event.target.password.value,
     address: event.target.address.value,
     email: event.target.email.value,
   }
   
   const JSONdata = JSON.stringify(data)
   const endpoint = '/api/registrationHelper'



   const options = {
     method: 'POST',        // The method is POST because we are sending data.
     headers: {'Content-Type': 'application/json', }// Tell the server we're sending JSON.
     ,
     body: JSONdata, // Body of the request is the JSON data we created above.
   }


   const response = await fetch(endpoint, options)

   // Get the response data from server as JSON.
   // If server returns the name submitted, that means the form works.
   //const result = await response.json()
   alert(`done!`)
 



}


export default function register() {
  return (
        <>
      
      <Link href="/api/hello"> user JSON</Link><br></br>
      <Link href="./"> Home </Link><br></br>
              <Link href="customer"> Customer </Link><br></br>
              <Link href="checkout"> Checkout </Link><br></br>
              <Link href="manager"> Manager </Link><br></br>
              <Link href="register"> Register </Link><br></br>


              <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>

            <form onSubmit={HandleSubmit}>               
                  username:
                  <input type="text" id="username" name="username" />
                <p></p>
                email:
                  <input type="email" id="email" name="email" /> 
                <p></p>
                address:
                <input type="text" id="address" name="address" /> 
                <p></p>
                password:
                  <input type="password" id="password" name="password"/>
                
                <br></br>
                <input type="submit" value="Submit" />
              
              </form>

      </div>

        </>
  )
}

