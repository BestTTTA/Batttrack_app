import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import { BASE_URL } from '@env';
import moment from 'moment';


const Qrcode = ({ route, navigation }) => {
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');
    const [torchEnabled, setTorchEnabled] = useState(false);
    const { user_id, username } = route.params;

    
    // const [holdingResponse, setHoldingresponse] = useState("")
   

    // const fetchDataHolding = useCallback(async (product_id) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/get_product_id/${product_id}`);
    //         setHoldingresponse(response.data.holding_time)
    //         console.log(response.data.holding_time)
    //     } catch (error) {
    //     }
    // }, []);


    const onSuccess = async (e) => {
        const scannedProductId = e.data;
        try {
            await Create_product(scannedProductId);
            // await Getproductid(scannedProductId);
            // await fetchData(scannedProductId);
        } catch (error) {
            console.log("error scan", error)
        }
    };


    const Create_product = async (product_id) => {
        try {
            const response = await axios.post(`${BASE_URL}/create_product`, {
                product_id: product_id,
                start_time: currentDateTimeThailand,
                end_time: "...",
                holding_time: "stop",
                current_stage: 1
            });
            if (response.status === 200) {
                navigation.navigate("Preview", {
                    user_id: user_id,
                    username: username,
                    product_id: product_id,
                    render: 1
                });
            }
        } catch (error) {
            navigation.navigate("Preview", {
                user_id: user_id,
                username: username,
                product_id: product_id,
                render: 1
            });
        }
    };


    // const fetchData = async (product_id) => {
    //     try {
    //         const responseFetchData = await axios.get(`${BASE_URL}/get_product_id/${product_id}`);
    //         if (responseFetchData.status === 200) {
    //             await Getproductid(product_id, responseFetchData.data.current_stage);
    //         }
    //     } catch (error) {
    //         console.log("Error from fetchData", product_id, error)
    //     }
    // };


    // const Getproductid = async (product_id, stage) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/get_product_id/${product_id}`);
    //         if (response.data.end_time === "..." && response.data.holding_time === "stop") {
    //             // await Addemployee(product_id, stage);
    //         } else {
                // navigation.navigate("Preview", {
                //     user_id: user_id,
                //     username: username,
                //     product_id: product_id,
                //     render: 1
                // });
    //         }
    //     } catch (error) {
    //         console.log("Error from Getproductid:", error);
    //     }
    // };
    


    // const Addemployee = async (product_id, stage) => {
    //     try {
    //         const response = await axios.put(`${BASE_URL}/add_employee/${product_id}`, {
    //             user_id: user_id,
    //             name: username,
    //             start_time: currentDateTimeThailand,
    //             end_time: "...",
    //             holding_time: "stop",
    //             current_stage: stage
    //         });
    //         if (response.status === 200) {
    //             navigation.navigate("Preview", {
    //                 user_id: user_id,
    //                 username: username,
    //                 product_id: product_id,
    //                 render: 1
    //             })
    //         }
    //     } catch (error) {
    //         navigation.navigate("Preview", {
    //             user_id: user_id,
    //             username: username,
    //             product_id: product_id,
    //             render: 1
    //         })
    //     }
    // };


    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return (
        <View style={styles.centerText}>
            <QRCodeScanner
                reactivate={true}
                reactivateTimeout={3000}
                onRead={onSuccess}
                flashMode={torchEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                topContent={
                    <View style={styles.overlayContainer}>
                        <Image
                            source={require('../../assets/scan.png')}
                            style={{ width: 300, height: 300 }}
                        />
                    </View>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={toggleTorch}>
                        <Image
                            source={torchEnabled ? require('../../assets/offflash.png') : require('../../assets/onflash.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

export default Qrcode;
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
    },
    buttonText: {
        fontSize: 21,
        color: 'orange',
    },
    buttonTouchable: {
        padding: 16,
    },
    cameraView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20
    },
    overlayContainer: {
        position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        height: '100%'
    },
    centeredText: {
        fontSize: 18,
        color: 'white',
    },
});
