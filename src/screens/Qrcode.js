import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
import { BASE_URL } from '@env';
import moment from 'moment';

const Qrcode = ({ route, navigation }) => {
    const currentDateTimeThailand = moment().format('YYYY-MM-DD HH:mm:ss');
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [stage, setStage] = useState(null);
    const [productId, setProductId] = useState(null);

    const onSuccess = async (e) => {
        const scannedProductId = e.data;
        setProductId(scannedProductId);

        try {
            const apiUrl = `${BASE_URL}/get_product/${scannedProductId}/stage_work`;
            const res = await axios.get(apiUrl);
            setStage(res.data.stage_work);
        } catch (error) {
        }

        if (productId && stage !== undefined) {
            navigation.navigate("Preview", { ProductId: productId, time: currentDateTimeThailand });
        } else {
            addWorker(productId, stage);
        } const productToAdd = [{
            product_id: scannedProductId,
            start_work: currentDateTimeThailand,
            end_work: "No data",
            stage_work: 1,
        }];
        addProduct(productToAdd);
    };

    const addProduct = async (products) => {
        try {
            const url = `${BASE_URL}/add_product/`;
            await axios.post(url, { list_product: products });
        } catch (error) {
        }
    };

    useEffect(() => {
        if (stage !== null && productId !== null) {
            addWorker(productId, stage);
        }
    }, [stage, productId]);

    const addWorker = async (productId, stage) => {
        const { user_id, username } = route.params;
        try {
            await axios.put(`${BASE_URL}/update_worker/${productId}/worker_model`, {
                worker_id: user_id,
                user_name: username,
                stage_work: stage,
                start_work: currentDateTimeThailand
            });
        } catch (error) {
        }
    };

    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return (
        <View style={styles.centerText}>
            <QRCodeScanner
                reactivate={true}
                reactivateTimeout={1000}
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
