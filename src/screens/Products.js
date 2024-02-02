import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '@env';
import ProgressDialog from 'react-native-progress-dialog';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/products/`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading && <ProgressDialog loaderColor={"orange"} label={'Please wait'} />}
            <ScrollView>
                {products.map((product) => (
                    <View key={product.product_id} style={styles.productContainer}>
                        <Text style={styles.text}>Product ID: {product.product_id}</Text>
                        <Text style={styles.text}>Start Work: {product.start_work}</Text>
                        <Text style={styles.text}>End Work: {product.end_work}</Text>
                        <Text style={styles.text}>Stage Work: {product.stage_work}</Text>
                        <View style={styles.workerContainer}>
                            {product.workers.map((worker) => (
                                <View key={worker.worker_id} style={styles.workerDetails}>
                                    <Text style={styles.text}>Worker ID: {worker.worker_id}</Text>
                                    <Text style={styles.text}>Username: {worker.user_name}</Text>
                                    <Text style={styles.text}>Stage Work: {worker.stage_work}</Text>
                                    <Text style={styles.text}>Start Work: {worker.start_work}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default AllProduct;

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
});


