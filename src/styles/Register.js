import { StyleSheet } from 'react-native';

export default function Register() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },
        containerlogo: {
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '100%'
        },
        containertextfield: {
            flex: 0.6,
            alignItems: 'center',
            backgroundColor: 'white',
            width: '100%'
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
            height: 80,
        },
        customButtonText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
        },

    });

    return { styles }
}
