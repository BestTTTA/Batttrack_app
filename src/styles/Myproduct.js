import { StyleSheet } from 'react-native';

export default function Myproduct() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#ff6600'
        },
        productContainer: {
            marginBottom: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 8,
        },
        workerContainer: {
            marginTop: 5,
            backgroundColor: 'white',
        },
        workerDetails: {
            marginTop: 5,
            padding: 5,
            backgroundColor: '#E8EEF2',
            borderRadius: 10,
        },
        text: {
            color: 'black',
        },
        textproduct: {
            color: 'black',
            fontWeight: 'bold',
        },
    });

    return { styles }
}