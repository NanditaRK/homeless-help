'use client'

import React from 'react';

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <input
                placeholder="Search for resource here"
                className="flex border border-slate-300 p-4 font-inter mx-auto m-12 w-1/2 h-12 rounded-full justify-center"
                type="search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
