import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@env';

const hookRegister = (navigation) => {
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

    const register = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/register/`, {
                username,
                password
            });
            if (response.status === 200) {
                navigation.navigate('Login');
            }
        } catch (error) {
            showAlert("User or Password is already exist");
        }
        setIsLoading(false);
    };

    return {
        setUsername,
        setPassword,
        isLoading,
        alertVisible,
        alertMessage,
        hideAlert,
        register,
        username,
        password
    };
};

export default hookRegister;
