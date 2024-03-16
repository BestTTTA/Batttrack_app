import { useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '@env';

const hookLogin = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const Login = async () => {
        const dataToSend = { username, password };
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/login/`, dataToSend);
            if (response.status === 200) {
                navigation.navigate("Options", {
                    user_id: response.data.user_id,
                    username: response.data.username
                });
            }
        } catch (error) {
            showAlert("เข้าสู่ระบบผิดพลาด");
            console.log(`${BASE_URL}/login/`)
        }
        setIsLoading(false);
    };

    return { username, setUsername, password, setPassword, isLoading, Login, alertVisible, alertMessage, hideAlert };
};

export default hookLogin;
