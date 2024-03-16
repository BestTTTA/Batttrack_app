import { useState, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL } from '@env';

const hookFetchproduct = (user_id) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${BASE_URL}/employee/${user_id}`);
                setProducts(response.data);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [user_id]); 

    return { products, isLoading, error };
};

export default hookFetchproduct;
