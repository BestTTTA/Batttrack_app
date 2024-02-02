import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, message, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.alertContainer}>
                    <Text style={styles.alertText}>{message}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    alertText: {
        fontSize: 18,
        marginBottom: 10,
        color:'black'
    },
    closeButton: {
        fontSize: 16,
        color: 'orange',
        textDecorationLine: 'none',
    },
});

export default CustomAlert;
