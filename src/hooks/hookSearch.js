import { useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '@env';

const hookSearch = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const fetchData = async () => {
        if (!search.trim()) {
            showAlert("โปรดใส่โปรดักไอดีให้ถูกต้อง");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get_product_id/${search}`);
            setProducts(response.data);
        } catch (error) {
            showAlert("ไม่พบโปรดัก");
        }
        setIsLoading(false);
    };

    return {
        search,
        setSearch,
        products,
        isLoading,
        alertVisible,
        alertMessage,
        showAlert,
        hideAlert,
        fetchData,
    };
};

export default hookSearch;
