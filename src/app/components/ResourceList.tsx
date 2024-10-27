'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useData from './useData';

type Resource = {
    _id: string;
    title: string;
    description: string;
    website: string;
    phone: string;
    address: string;
};

type ResourceListProps = {
    searchTerm: string;
    category: string;
};

const ResourceList: React.FC<ResourceListProps> = ({ searchTerm, category }) => {
    const { data } = useData(category);

    // Filter resources based on search term
    const filteredResources = data.filter((resource: Resource) => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex flex-col pb-16 items-center'>
            {filteredResources.length > 0 ? (
                filteredResources.map((resource: Resource) => (
                    <div className='flex flex-col bg-white border shadow-lg p-8 rounded-lg w-[60vw] m-4 h-fit' key={resource._id}>
                        <h2 className='text-xl maxsm:text-l m-2 text-main inline-block bg-clip-text'>{resource.title}</h2>
                        <p className='text-slate-600 maxsm:text-sm m-2'>{resource.description}</p>

                        <div className='flex items-center 3xl:justify-between justify-around flex-wrap'>
                            <div className='flex items-center content-center flex-wrap'>
                                <div className='flex m-1 maxsm:text-xs'>
                                    <Image className='mx-2 h-6 w-6' src="/assets/address.png" width={24} height={24} alt="address icon"/>
                                    <p>{resource.address}</p>
                                </div>
                                <div className='flex m-1 maxsm:text-xs'>
                                    <Image className='mx-2 h-6 w-6' src="/assets/phone.png" width={24} height={24} alt="phone icon"/>
                                    <p>{resource.phone}</p>
                                </div>
                            </div>
                            <div>
                                <Link target="_blank" href={resource.website}>
                                    <Image className='hover:relative hover:bottom-2' src="/assets/link.png" width={24} height={24} alt="external link"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No resources found.</p>
            )}
        </div>
    );
};

export default ResourceList;
