import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png'

const Navbar = () => {
  return (
    <ul className='flex justify-between'>

        <Link href='/'><li><Image src={logo} width={100} height={100} alt='Homeless Help Logo'/></li></Link>
        <div className='flex w-1/2 items-center text-lg justify-around'>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/shelter'><li>Shelter</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/food'><li>Food</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/hygiene'><li>Hygiene</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/health'><li>Health</li></Link>
        </div>
        

    </ul>
  )
}

export default Navbar;