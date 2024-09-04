'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png'
import menu from '../../../public/assets/menu.webp'
const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
    <ul className='flex justify-between'>

        <Link href='/'><li><Image src={logo} width={100} height={100} alt='Homeless Help Logo'/></li></Link>
        <div className='flex mx-8 justify-center items-center md:hidden'>
          <Image onClick={()=>setToggle(!toggle)} src={menu} width={25} height={25} alt='Menu button' />
        </div>
        <div className='hidden md:flex w-1/2 items-center text-lg justify-around'>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/shelter'><li>Shelter</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/food'><li>Food</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/hygiene'><li>Hygiene</li></Link>
            <Link className='duration-500  hover:border hover:border-b-2 hover:border-b-main border-white' href='/health'><li>Health</li></Link>
        </div>

        
        

    </ul>
    {toggle && <div className='duration-500 absolute flex flex-col z-10 bg-main text-white w-full list-none items-center text-lg justify-around'>
      <Link className='p-4 w-full text-center hover:bg-black hover:text-white' href='/shelter'><li>Shelter</li></Link>
      <Link className='p-4 w-full text-center hover:bg-black hover:text-white' href='/food'><li>Food</li></Link>
      <Link className='p-4 w-full text-center hover:bg-black hover:text-white' href='/hygiene'><li>Hygiene</li></Link>
      <Link className='p-4 w-full text-center hover:bg-black hover:text-white' href='/health'><li>Health</li></Link>
  </div>}

  </>
    
  )
}

export default Navbar;