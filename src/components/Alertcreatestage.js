import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

import { BASE_URL } from '@env';


export default function Alertcreatestage({ product_id, onClose, visible }) {
    const [name_stage, setNameStage] = useState('');
    const [content_stage, setContentStage] = useState('');

    const Create_stage = async () => {
        try {
            const response = await axios.put(`${BASE_URL}/add_info_stage/${product_id}`, {
                name_stage,
                content_stage,
            });
            console.log(response.data); 
            onClose();
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.alertContainer}>
                    <TextInput
                        placeholder="ชื่อขั้นตอน"
                        value={name_stage}
                        placeholderTextColor="gray"
                        onChangeText={setNameStage}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="เนื้อหาขั้นตอน"
                        value={content_stage}
                        placeholderTextColor="gray"
                        onChangeText={setContentStage}
                        multiline={true}
                        numberOfLines={4}
                        style={styles.inputcontent}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                            <Text style={styles.buttonTextcancle}>ยกเลิก</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Create_stage} style={styles.continueButton}>
                            <Text style={styles.buttonText}>ดำเนินการต่อ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
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
    input: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 225,
        color: 'black',
    },
    inputcontent: {
        marginBottom: 20,
        paddingTop: 10, 
        paddingHorizontal: 10, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 225, 
        height: 200,
        color: 'black',
        textAlignVertical: 'top', 
    },
    alertText: {
        fontSize: 18,
        marginBottom: 20,
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    continueButton: {
        backgroundColor: '#ff6600',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 10,
    },
    cancelButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        borderStyle: 'solid',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    buttonTextcancle: {
        fontSize: 16,
        color: '#ff6600',
    },
});