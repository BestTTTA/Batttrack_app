import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ProgressDialog from 'react-native-progress-dialog';
import { BASE_URL } from '@env';
import CustomAlert from '../components/Alert';

const Search = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
      };
    

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get_product_id/${search}`);
            setProducts(response.data);
        } catch (error) {
            showAlert("Not found product")
        }
        setIsLoading(false);
    };


    return (
        <View style={styles.container}>
            <CustomAlert
                visible={alertVisible}
                message={alertMessage}
                onClose={hideAlert}
            />
            {isLoading ? <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} /> : null}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search products"
                    placeholderTextColor="gray"
                    onChangeText={setSearch}
                    value={search}
                />
                <TouchableOpacity onPress={fetchData}>
                    <Image
                        source={require('../../assets/magnifier.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View key={products.product_id} style={styles.productContainer}>
                    <Text style={styles.textproduct}>Product ID: {products.product_id}</Text>
                    <Text style={styles.text}>Start Work: {products.start_time}</Text>
                    <Text style={styles.text}>End Work: {products.end_time}</Text>
                    <Text style={styles.text}>Stage Work: {products.current_stage}</Text>
                    {products.employees && products.employees.map(worker => (
                        <View key={worker.user_id} style={styles.workerDetails}>
                            <Text style={styles.textworker}>Worker ID: {worker.user_id}</Text>
                            <Text style={styles.text}>Username: {worker.name || 'No Name'}</Text>
                            <Text style={styles.text}>Stage Work: {worker.current_stage}</Text>
                            <Text style={styles.text}>Start Work: {worker.start_time}</Text>
                            {/* <Text style={styles.text}>End Work: {worker.end_time}</Text> */}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

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

export default Search;
