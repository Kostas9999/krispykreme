

import Link from 'next/link'

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
          headers: { 'Content-Type': 'application/json'  }// Tell the server we're sending JSON.
          ,
          body: JSONdata, // Body of the request is the JSON data we created above.
        }


        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        //alert(`server result: ${result}`)

        // redirect based on the result
    //  if(result == "ok"){ router.push("/manager");}
    
  }
  
  
  return (
    <>
    
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
  )
}

