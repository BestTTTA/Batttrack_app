import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import hookQRcode from '../hooks/hookQRcode';
import CustomAlert from '../components/Alert2Way';


const Qrcode = ({ route, navigation }) => {
    const { user_id, username } = route.params;
    const { torchEnabled, toggleTorch, onSuccess, alertVisible, alertMessage, hideAlert, Continue } = hookQRcode(navigation, user_id, username);


    return (
        <View style={styles.centerText}>
            <CustomAlert visible={alertVisible} message={alertMessage} onClose={hideAlert} onContinue={Continue} onCancel={hideAlert}/>
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
