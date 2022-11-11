import Link from 'next/link';

import Navbar from '../templates/navbar';
import { NextUIProvider } from "@nextui-org/react"



export default function manager() {
  return (
    <NextUIProvider>
         <Navbar />
       
         </NextUIProvider>
  )
}


