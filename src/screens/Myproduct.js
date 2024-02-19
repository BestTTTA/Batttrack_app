import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import hookFetchproduct from '../hooks/hookFetchproduct';
import StyleMyproduct from '../styles/Myproduct'

const Myproduct = ({ route }) => {
    const { user_id } = route.params;
    const { products, isLoading, error } = hookFetchproduct(user_id);
    const { styles } = StyleMyproduct();

    return (
        <View style={styles.container}>
            {isLoading && <ProgressDialog loaderColor={"orange"} label={'Please wait'} />}
            <ScrollView>
                {products.map((product) => (
                    <View key={product.product_id} style={styles.productContainer}>
                        <Text style={styles.textproduct}>Product ID: {product.product_id}</Text>
                        <Text style={styles.text}>Start Work: {product.start_time}</Text>
                        <Text style={styles.text}>End Work: {product.end_time}</Text>
                        <Text style={styles.text}>Stage Work: {product.current_stage}</Text>
                    </View>
                ))}
            </ScrollView>
            {error && <Text>Error fetching products.</Text>}
        </View>
    );
};

export default Myproduct;


