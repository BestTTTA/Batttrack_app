import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Products from '../screens/Products';
import SplashScreen from '../screens/SplashScreen';
import Options from '../screens/Options';
import Qrcode from '../screens/Qrcode';
import Preview from '../screens/Preview';
import PreviewStage from '../screens/PreviewStage';
import Search from '../screens/Search';
import Myproduct from '../screens/Myproduct';
import Nextstage from "../screens/Nextstage"


const Stack = createNativeStackNavigator();

function Navigations() {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <NavigationContainer>
            {isLoading ? <SplashScreen /> : <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Register" component={Register} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Options" component={Options} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Qrcode" component={Qrcode} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Nextstage" component={Nextstage} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Preview" component={Preview} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="PreviewStage" component={PreviewStage} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Products" component={Products} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Search" component={Search} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Myproduct" component={Myproduct} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>}
        </NavigationContainer>
    );
}

export default Navigations;