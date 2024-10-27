
'use client'
import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Hygiene = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <section className='w-screen min-h-screen bg-waves bg-bottom bg-no-repeat bg-cover'>
        <Navbar />
        <h1 className='text-3xl text-center'>Hygiene Resources</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div>
            <ResourceList searchTerm={searchTerm} category="hygiene" />
        </div>
    </section>
  );
};

export default Hygiene;
