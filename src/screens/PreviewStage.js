import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '@env';
import ProgressDialog from 'react-native-progress-dialog';

const MyComponent = ({ route }) => {
    const [response, setResponse] = useState(null);
    const [responseend, setResponseend] = useState(null);
    const { product_id } = route.params;

    useEffect(() => {
        const apiUrl = `${BASE_URL}/get_product/${product_id}/stage_work`;
        axios
            .get(apiUrl)
            .then((res) => {
                setResponse(res.data.stage_work);
            })
            .catch((error) => {
            });
    }, []);

    useEffect(() => {
        const apiUrl = `${BASE_URL}/get_product/${product_id}/end_work`;
        axios
            .get(apiUrl)
            .then((res) => {
                setResponseend(res.data.end_work);
            })
            .catch((error) => {
            });
    }, []);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {response && !isNaN(response) ? (
                    Array.from({ length: response }, (_, index) => (
                        <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 50,
                                    borderWidth: 3,
                                    borderColor: responseend !== "No data" ? '#D3D3D3' : (index + 1 === response ? '#3CC969' : '#EBEDEE'),
                                    width:  responseend !== "No data" ? 60 : (index + 1 === response ? 70 : 60),
                                    height: responseend !== "No data" ? 60 : (index + 1 === response ? 70 : 60),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white'
                                }}
                            >
                                {responseend !== "No data" ? (
                                    <Image
                                        source={require('../../assets/check.png')}
                                        style={{ width: 30, height: 30, margin: 20 }}
                                    />
                                ) : (
                                    index + 1 === response ? (
                                        <Text style={{ color: '#3CC969', fontWeight: 'bold' }}>S{index + 1}</Text>
                                    ) : (
                                        <Image
                                            source={require('../../assets/check.png')}
                                            style={{ width: 30, height: 30, margin: 20 }}
                                        />
                                    )
                                )}
                            </TouchableOpacity>
                            <View style={{ borderColor: '#21C372', borderWidth: 1, height: 50, width: 2 }}></View>
                        </View>
                    ))
                ) : (
                    <ProgressDialog loaderColor={"orange"} label={'Please wait'} />
                )}
                <TouchableOpacity style={{
                    borderRadius: 50,
                    borderWidth: 5,
                    borderColor: responseend !== "No data" ? 'red' : '#D3D3D3',
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    <Text style={{ color: responseend !== "No data" ? 'red' : '#D3D3D3', fontWeight: 'bold' }}>End</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MyComponent;