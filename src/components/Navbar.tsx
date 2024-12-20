import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return ( 
    <div className='flex justify-between items-center uppercase p-4 text-red-500 border-b-2 border-red-500 h-12'>
        {/* logo */}
        <div className='text-xl uppercase '>
        <Link href="/"> MASSIMO</Link>
       </div>

        {/* mobmenu */}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar
