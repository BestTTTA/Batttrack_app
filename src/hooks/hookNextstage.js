import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@env';
import moment from 'moment';

const hookNextstage = (navigation, user_id, username, stage, product_id) => {
    const [torchEnabled, setTorchEnabled] = useState(false);
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');

    const onSuccess = async (e) => {
        const scannedProductId = e.data;
        try {
            await addEmployee(scannedProductId);
        } catch (error) {
            
        }
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
                    render: stage + 1
                });
            }
        } catch (error) {
            navigation.navigate("Preview", {
                user_id: user_id,
                username: username,
                product_id: scannedProductId,
                render: stage + 1
            });
        }
    };

    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return { torchEnabled, toggleTorch, onSuccess };
};

export default hookNextstage;
