import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SplashScreen = () => {
    const imageScale = new Animated.Value(0.1);
    Animated.timing(imageScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
    }).start();
    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/logosplash.png')}
                style={[styles.image, { transform: [{ scale: imageScale }] }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6600',
    },
    image: {
        width: 400,
        height: 400,
    },
});

export default SplashScreen;