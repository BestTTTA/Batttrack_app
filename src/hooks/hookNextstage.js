import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL } from '@env';
import moment from 'moment';

const hookNextstage = (navigation, user_id, username) => {
    const [torchEnabled, setTorchEnabled] = useState(false);
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [product_id, setProductid] = useState('')
    const [stage, setStage] = useState(0);

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const Continue = async () => {
        await updateStage();
        await addEmployee(product_id);
    }

    const onSuccessAddemp = async (e) => {
        const scannedProductId = e.data;
        showAlert("Do you want to continue?")
        setProductid(scannedProductId)
    };

    const addEmployee = async (scannedProductId) => {
        try {
            const response = await axios.put(`${BASE_URL}/add_employee/${scannedProductId}`, {
                user_id: user_id,
                name: username,
                start_time: currentDateTimeThailand,
                end_time: "...",
                holding_time: "stop",
                current_stage: stage + 1
            });
            if (response.status === 200) {
                navigation.navigate("Preview", {
                    user_id: user_id,
                    username: username,
                    product_id: scannedProductId,
                    error: false
                });
            }
        } catch (error) {
            navigation.navigate("Preview", {
                user_id: user_id,
                username: username,
                product_id: scannedProductId,
                error: true
            });
        }
    };

    const updateStage = async () => {
        try {
            await axios.put(`${BASE_URL}/${product_id}/current_stage`, {
                current_stage: stage + 1
            });
            await fetchData();
        } catch (error) {

        } finally {
        }
    };

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`${BASE_URL}/get_product_id/${product_id}`);
            setStage(response.data.current_stage);
        } catch (error) {
        } finally {
        }
    }, [product_id]);

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [fetchData]);

    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return { torchEnabled, toggleTorch, onSuccessAddemp, hideAlert, alertVisible, alertMessage, Continue, updateStage};
};

export default hookNextstage;
