import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';
const Start = () => {
    return (
        <div className='w-screen min-h-screen bg-waves bg-bottom bg-no-repeat bg-cover'>
            <Navbar />
            <h1 className="text-center text-main text-4xl m-8">Get Started</h1>
            <div className='flex justify-center flex-wrap m-16'>

                <div className="shadow-2xl w-[20rem] bg-white h-96 rounded-3xl m-8 flex flex-col items-center">
                    <h1 className='text-center text-main text-2xl m-8'>Shelter</h1>
                    <div className='px-16 py-4 text-lg text-center flex-grow'>Do you need a roof over your head to stay safe?</div>
                   
                    <Link href='/shelter'><div className="bg-black text-white p-3 px-6 m-4 mb-6 rounded-full">Shelter → </div></Link>
                </div>
                <div className="shadow-2xl w-[20rem] bg-white h-96 rounded-3xl m-8 flex flex-col items-center">
                    <h1 className='text-center text-main text-2xl m-8'>Food</h1>
                    <div className='px-16 py-4 text-lg text-center flex-grow'>Do you need food for you or someone else?</div>
                    
                    <Link href='/food'><div className="bg-black text-white p-3 px-6 m-4 mb-6 rounded-full">Food → </div></Link>

                </div>
                <div className="shadow-2xl w-[20rem] bg-white h-96 rounded-3xl m-8 flex flex-col items-center">
                    <h1 className='text-center text-main text-2xl m-8'>Hygiene</h1>
                    <div className='px-16 py-4 text-lg text-center flex-grow'>Do you need any essentials products to keep yourself clean?</div>
                    
                    <Link href='/hygiene'><div className="bg-black text-white p-3 px-6 m-4 mb-6 rounded-full">Hygiene → </div></Link>
                </div>
                <div className="shadow-2xl w-[20rem] bg-white h-96 rounded-3xl m-8 flex flex-col items-center">
                    <h1 className='text-center text-main text-2xl m-8'>Health</h1>
                    <div className='px-16 py-4 text-lg text-center flex-grow'>Do you have any injuries or health problems that need to be fixed?</div>
                    
                    <Link href='/health'><div className="bg-black text-white p-3 px-6 m-4 mb-6 rounded-full">Health → </div></Link>
                </div>

            </div>
            
        </div>
      )
}

export default Start;