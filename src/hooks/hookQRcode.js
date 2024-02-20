import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '@env';

export default hookQRcode = (navigation, user_id, username) => {
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [product_id, setProductid] = useState('')

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const Continue = async () => {
        await createProduct(product_id);
    }

    const onSuccess = async (e) => {
        const scannedProductId = e.data;
            showAlert("Do you want to continue?")
            setProductid(scannedProductId)
    };


    const createProduct = async (product_id) => {
        try {
            const response = await axios.post(`${BASE_URL}/create_product`, {
                product_id: product_id,
                start_time: currentDateTimeThailand,
                end_time: "...",
                holding_time: "stop",
                current_stage: 0
            });
            if (response.status === 200) {
                navigation.navigate("Preview", {
                    user_id: user_id,
                    username: username,
                    product_id: product_id,
                });
            }
        } catch (error) {
            navigation.navigate("Preview", {
                user_id: user_id,
                username: username,
                product_id: product_id,
            });
        }
    };



    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return {
        torchEnabled, toggleTorch, onSuccess, alertVisible,
        alertMessage,
        showAlert,
        hideAlert,
        Continue,
    };
};
