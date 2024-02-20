import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import hoookFetchAllProducts from '../hooks/hoookFetchAllProducts';
import StyleProducts from '../styles/Product';

const AllProduct = () => {
    const { products, isLoading } = hoookFetchAllProducts();
    const { styles } = StyleProducts();

    return (
        <View style={styles.container}>
            {isLoading && <ProgressDialog loaderColor={"orange"} label={'Please wait'} />}
            <ScrollView>
                {products.map((product) => (
                    <View key={product.product_id} style={styles.productContainer}>
                        <Text style={styles.textproduct}>Product ID: {product.product_id}</Text>
                        <Text style={styles.text}>Start Work: {product.start_time}</Text>
                        {product.end_time === "..." ? <Text style={styles.text}>End Work: {product.end_time}</Text> : <Text style={{ color: 'red' }}>End Work: {product.end_time}</Text>}
                        <Text style={styles.text}>Stage Work: {product.current_stage}</Text>
                        <View style={styles.workerContainer}>
                            {product.employees.map((worker) => (
                                <View key={worker.user_id} style={styles.workerDetails}>
                                    <Text style={styles.textproduct}>Worker ID: {worker.user_id}</Text>
                                    <Text style={styles.text}>Username: {worker.name}</Text>
                                    <Text style={styles.text}>Stage Work: {worker.current_stage}</Text>
                                    <Text style={styles.text}>Start Work: {worker.start_time}</Text>
                                    <Text style={styles.text}>End Work: {worker.end_time}</Text>
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

// Styles remain the same...
