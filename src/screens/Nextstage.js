import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import hookNextstage from '../hooks/hookNextstage';
import StyleNextstage from '../styles/Nextstage'
import CustomAlert2Way from '../components/Alert2Way';


const Nextstage = ({ route, navigation }) => {
    // const randomNumber = Math.floor(Math.random() * 100);
    const { user_id, username } = route.params;
    const { torchEnabled, toggleTorch, onSuccessAddemp, hideAlert, alertVisible, alertMessage, Continue } = hookNextstage(navigation, user_id, username);
    const { styles } = StyleNextstage();


    return (
        <View style={styles.centerText}>
            <CustomAlert2Way visible={alertVisible} message={alertMessage} onClose={hideAlert} onContinue={Continue} onCancel={hideAlert} />
            <QRCodeScanner
                reactivate={true}
                reactivateTimeout={2000}
                onRead={onSuccessAddemp}
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

export default Nextstage;

