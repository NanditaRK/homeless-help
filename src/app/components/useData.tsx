import { useState, useEffect } from 'react';

type Resource = {
    _id: string;
    title: string;
    description: string;
    website: string;
    email: string;
    address: string;
    phone: string;
};

const useData = (category: string) => {
    const [data, setData] = useState<Resource[]>([]); // Initialize as empty array
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            if (!category) return; // Ensure category is defined

            try {
                const response = await fetch(`${baseUrl}/api?category=${category}`);
                if (!response.ok) throw new Error('Failed to fetch data');
                
                const result: Resource[] = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [baseUrl, category]); // Re-fetch data when category changes

    return { data, setData };
};

export default useData;
