import Link from 'next/link';





export default function Home({data}) {
  return (
        <>
     
 
              <Link href="/api/hello"> user JSON</Link><br></br>
              <Link href="customer"> Customer </Link><br></br>
              <Link href="checkout"> Checkout </Link><br></br>
              <Link href="manager"> Manager </Link><br></br>
              <Link href="register"> Register </Link><br></br>
             

              <br></br><br></br>


{  
data.users.map(employee => { 
                            return(<>
                            ID: {employee.id} <br></br>
                                  User: {employee.username} <br></br>
                                    Password: {employee.pass}  <br></br>
                                    Email: {employee.email}  <br></br>
                                    Address: {employee.address}  <br></br>
                                    Type: {employee.type}  <br></br>
                                    <br></br>
                                    <br></br>
                                    </>
                                    ); 
                    }) 
              }
        </>
  )
}

// This gets called on every request



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}
