import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import LinearGradient from 'react-native-linear-gradient';
import CustomAlert from '../components/Alert';
import hookRegister from '../hooks/hookRegister';
import StyleRegister from '../styles/Register'

const Register = ({ navigation }) => {
    const {
        setUsername,
        setPassword,
        isLoading,
        alertVisible,
        alertMessage,
        hideAlert,
        register,
        username,
        password
    } = hookRegister(navigation);

    const { styles } = StyleRegister();

    return (
        <View style={styles.container}>
            {isLoading && <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} />}
            <View style={styles.containerlogo}>
                <Image
                    source={require('../../assets/logologin.png')}
                />
            </View>

            <View style={styles.containertextfield}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TouchableOpacity onPress={register} style={styles.containButton}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#FF8600', '#FF7600', '#FF6600']}
                        style={styles.customButton}
                    >
                        <Text style={styles.customButtonText}>Register</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <CustomAlert
                visible={alertVisible}
                message={alertMessage}
                onClose={hideAlert}
            />
        </View>
    );
};



export default Register;
