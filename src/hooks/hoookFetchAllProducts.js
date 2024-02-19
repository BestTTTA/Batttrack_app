import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '@env';

const hoookFetchAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/getall_product`);
                setProducts(response.data);
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return { products, isLoading };
};

export default hoookFetchAllProducts;
