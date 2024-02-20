import { StyleSheet } from 'react-native';

export default function Search() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: '#ff6600',
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
        },
        input: {
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginRight: 10,
            backgroundColor: 'white',
            color: 'black'
        },
        searchIcon: {
            width: 30,
            height: 30,
        },
        productContainer: {
            height: "100%",
            marginBottom: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            backgroundColor: 'white',
            height: "100%",
        },
        textproduct: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'black'
        },
        textworker: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            color: 'black'
        },
        text: {
            fontSize: 16,
            marginBottom: 5,
            color: 'black'
        },
        workerDetails: {
            marginLeft: 10,
            borderLeftWidth: 1,
            borderColor: '#ccc',
            paddingLeft: 10,
        },
    });

    return { styles }
}
