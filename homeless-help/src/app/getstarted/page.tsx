import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';
const Start = () => {
    return (
        <div className='w-screen h-screen bg-waves bg-bottom bg-no-repeat bg-cover'>
            <Navbar />
            <h1 className="text-center text-main text-4xl m-8">Get Started</h1>
            <div className='flex m-16'>
                <div className="shadow-2xl w-1/4 h-96 rounded-3xl m-8 flex flex-col items-center">
                    <h1 className='text-center text-main text-2xl m-8'>Shelter</h1>
                    <div className='px-16 py-8 text-lg text-center'>Do you need a roof over your head to stay safe?</div>
                    <ul>
                        <li>find hotels</li>
                        <li>look for organizations</li>

                    </ul>
                    <Link href='/shelter'><button className="bg-black text-white animate-bounce p-3 px-6 m-4 rounded-full">Shelter → </button></Link>
                </div>
                <div className="shadow-2xl w-1/4 h-96 rounded-3xl m-8">
                    <h1 className='text-center text-main text-2xl m-8'>Food</h1>

                </div>
                <div className="shadow-2xl w-1/4 h-96 rounded-3xl m-8">
                    <h1 className='text-center text-main text-2xl m-8'>Hygiene</h1>
                </div>
                <div className="shadow-2xl w-1/4 h-96 rounded-3xl m-8">
                    <h1 className='text-center text-main text-2xl m-8'>Health</h1>
                </div>

            </div>
            
        </div>
      )
}

export default Start;