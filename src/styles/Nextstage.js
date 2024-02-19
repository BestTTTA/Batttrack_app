import { StyleSheet } from 'react-native';

export default function Nextstage() {

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

    return { styles }
}

