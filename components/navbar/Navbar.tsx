import Link from 'next/link'
import React from 'react'
import { HomeIcon} from '@primer/octicons-react'
export const Navbar = () => {
  return (
    <nav className="flex gb-blue-800 bg-opacity-30 p-2 m2 rounded">
        <Link href={'/'} className='flex items-center'> 
        <HomeIcon className='mr-2'/>
        <span>Home</span>
        </Link>
       

<div className='flex flex-1'></div>
        <Link className='mr-2' href="/about">About</Link>
        <Link className='mr-2' href="/PricingPage">Pricing</Link>
        <Link className='mr-2' href="/contactPage">Contact</Link>
    </nav>
  )
}
