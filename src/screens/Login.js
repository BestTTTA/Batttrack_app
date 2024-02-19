import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import LinearGradient from 'react-native-linear-gradient';
import CustomAlert from '../components/Alert';
import hookLogin from '../hooks/hookLogin';
import StyleLogin from '../styles/Login'

const Login = ({ navigation }) => {
  const { username, setUsername, password, setPassword, isLoading, Login, alertVisible, alertMessage, hideAlert } = hookLogin({ navigation });
  const { styles } = StyleLogin();

  return (
    <View style={styles.container}>
      {isLoading ? <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} /> : null}
      <View style={styles.containerlogo}>
        <Image source={require('../../assets/logologin.png')} />
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
        <TouchableOpacity onPress={Login} style={styles.containButton}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF8600', '#FF7600', '#FF6600']} style={styles.customButton}>
            <Text style={styles.customButtonText}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.containButtonregister}>
          <Text style={styles.customButtonTextRegister}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <CustomAlert visible={alertVisible} message={alertMessage} onClose={hideAlert} />
    </View>
  );
};


export default Login;
