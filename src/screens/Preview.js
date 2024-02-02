import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { BASE_URL } from '@env';
import ProgressDialog from 'react-native-progress-dialog';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const Preview = ({ route, navigation }) => {
    const [data, setData] = useState(null);
    const { ProductId, time } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [responseData, setResponsedata] = useState(null);
    const [responseend, setResponseend] = useState(null);

    useEffect(() => {
        const apiUrl = `${BASE_URL}/get_product/${ProductId}/end_work`;
        axios
            .get(apiUrl)
            .then((res) => {
                setResponseend(res.data.end_work);
            })
            .catch((error) => {
            });
    }, []);


    useEffect(() => {
        const getStage = () => {
            const apiUrl = `${BASE_URL}/get_product/${ProductId}/stage_work`;
            axios.get(apiUrl)
                .then((res) => {
                    setResponsedata(res.data.stage_work);
                })
                .catch((error) => {
                });
        };
        const interval = setInterval(() => {
            getStage();
        }, 1000);

        return () => clearInterval(interval);
    }, [BASE_URL, ProductId]);

    const updateProductStage = () => {
        setIsUpdating(true);
        const apiUrl = `${BASE_URL}/update_product/${ProductId}/stage_work`;
        const requestData = {
            stage_work: responseData + 1,
        };

        axios.put(apiUrl, requestData)
            .then((res) => {
                setIsUpdating(false);
            })
            .catch((error) => {
                setIsUpdating(false);
            });
    };

    const Endprocess = () => {
        setIsUpdating(true);
        const apiUrl = `${BASE_URL}/update_product/${ProductId}/end_work`;
        const requestData = {
            end_work: time
        };

        axios.put(apiUrl, requestData)
            .then((res) => {
                setIsUpdating(false);
            })
            .catch((error) => {
                setIsUpdating(false);
            });
        navigation.navigate('Login')
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/search/${ProductId}`);
                setData(response.data);
            } catch (error) {
            }
            setIsLoading(false);
        };

        fetchData();
    }, [ProductId]);

    if (!data) {
        return <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} />
    }

    return (
        <View style={styles.container}>
            {isUpdating && <ProgressDialog loaderColor={"orange"} label={'Please wait'} />}
            <View style={styles.containProduct}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 50, fontWeight: 'bold', color: 'orange'
                    }}>{data.product_id}</Text>
                </View>
                <Text style={styles.text}>Start Work: {data.start_work}</Text>
                <Text style={styles.text}>End Work: {data.end_work}</Text>
                <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
                    <Text style={styles.text}>Stage Work: {responseData}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('PreviewStage', {
                        product_id: ProductId,
                    })}>
                        <Text style={styles.textstage}>Preview Stage</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 6,
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>EMPLOYEES</Text>
                </View>
                <ScrollView >
                    {data.workers.map(worker => (
                        <View style={styles.worker} key={worker.worker_id}>
                            <Text style={styles.text}>User Name: {worker.user_name}</Text>
                            <Text style={styles.text}>Stage Work: {worker.stage_work}</Text>
                            <Text style={styles.text}>Start Work: {worker.start_work}</Text>
                            {/* <View style={{ borderWidth: 0.4, marginTop: 5, marginBottom: 5 }}></View> */}
                        </View>
                    ))}
                </ScrollView>
            </View>
            {responseend === "No data" ? (<View style={styles.containButton}>
                <TouchableOpacity
                    onPress={Endprocess}
                    style={styles.containButtonregister}
                >
                    <Text style={styles.customButtonTextRegister}>END STAGE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={updateProductStage}
                    style={styles.ButtonLogin}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#F5A928', '#F0891B', '#FF7600']}
                        style={styles.customButton}
                    >
                        <Text style={styles.customButtonText}>NEXT STAGE</Text>
                        <Image
                            source={require('../../assets/arrowwhite.png')}
                            style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>) : (<View></View>)
            }
        </View>
    );
};

export default Preview;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#ff6600',
    },
    containProduct: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
    },
    containButton: {
        // backgroundColor: 'transparent',
        borderRadius: 10,
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    worker: {
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },
    text: {
        color: 'black',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 15,
    },
    textstage: {
        color: 'orange',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    ButtonLogin: {
        width: '50%',
        alignItems: 'center',
        height: 40,
        margin: 5,
    },
    containButtonregister: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ff6600',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        margin: 5,
    },
    customButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    customButtonTextRegister: {
        color: '#ff6600',
        fontWeight: 'bold',
        fontSize: 16,
    },
    customButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
