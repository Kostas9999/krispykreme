import Link from 'next/link';





export default function manager() {
  return (
        <>
         
         <Link href="./"> Home </Link><br></br>
              <Link href="customer"> Customer </Link><br></br>
              <Link href="checkout"> Checkout </Link><br></br>
              <Link href="manager"> Manager </Link><br></br>
              <Link href="register"> Register </Link><br></br>
        </>
  )
}

// This gets called on every request
