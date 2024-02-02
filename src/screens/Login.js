import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '@env';
import ProgressDialog from 'react-native-progress-dialog';
import LinearGradient from 'react-native-linear-gradient';
import CustomAlert from './Alert';

const Login = ({ navigation }) => {
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

  const hookLogin = async () => {
    const dataToSend = {
      username: username,
      password: password,
    };

    console.log(username)
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login/`, dataToSend);
      if (response.status === 200) {
        navigation.navigate("Options", {
          user_id: response.data.user_id,
          username: response.data.username
        })
      }
    } catch (error) {
      showAlert("Invalid login")
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} /> : null}
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
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={hookLogin}
          style={styles.containButton}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#FF8600', '#FF7600', '#FF6600']}
            style={styles.customButton}
          >
            <Text style={styles.customButtonText}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.containButtonregister}
        >
          <Text style={styles.customButtonTextRegister}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={hideAlert}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerlogo: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%'
  },
  containertextfield: {
    flex: 0.6,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 30,
    width: '100%',
  },
  textRegister: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    textDecorationLine: 'underline',
  },
  input: {
    width: '80%',
    height: 60,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1.5,
    marginBottom: 20,
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  customButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  containButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  containButtonregister: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderColor: '#ff6600',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    height: 40,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 7,
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customButtonTextRegister: {
    color: '#ff6600',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default Login;
