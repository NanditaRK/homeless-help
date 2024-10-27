
'use client'
import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Shelter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <section className='w-screen min-h-screen bg-waves bg-bottom bg-no-repeat bg-cover'>
        <Navbar />
        <h1 className='text-3xl text-center'>Shelter Resources</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div>
            <ResourceList searchTerm={searchTerm} category="shelter" />
        </div>
    </section>
  );
};

export default Shelter;
