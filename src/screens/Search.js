import React from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import CustomAlert from '../components/Alert';
import hookSearch from '../hooks/hookSearch';
import StyleSearch from '../styles/Search'

const Search = () => {
    const {
        search,
        setSearch,
        products,
        isLoading,
        alertVisible,
        alertMessage,
        showAlert,
        hideAlert,
        fetchData,
    } = hookSearch();

    const { styles } = StyleSearch();

    return (
        <View style={styles.container}>
            <CustomAlert visible={alertVisible} message={alertMessage} onClose={hideAlert} />
            {isLoading && <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} />}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search products"
                    placeholderTextColor="gray"
                    onChangeText={setSearch}
                    value={search}
                />
                <TouchableOpacity onPress={fetchData}>
                    <Image source={require('../../assets/magnifier.png')} style={styles.searchIcon} />
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
                            <Text style={styles.text}>Username: {worker.name || ''}</Text>
                            <Text style={styles.text}>Stage Work: {worker.current_stage}</Text>
                            <Text style={styles.text}>Start Work: {worker.start_time}</Text>
                            <Text style={styles.text}>End Work: {worker.end_time}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};



export default Search;
