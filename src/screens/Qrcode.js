import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import CustomAlert from '../components/Alert2Way';
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '@env';

const Qrcode = ({ route, navigation }) => {
    const { username } = route.params;
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [product_id, setProductid] = useState('')
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');

    const Continue = async () => {
        console.log("continue", product_id)
        await createSteps(product_id)
    }

    const onSuccess = async (e) => {
        const scannedProductId = e.data;
        showAlert("คุณต้องการดำเนินการต่อใช่หรือไม่?")
        setProductid(scannedProductId);
        console.log("onSuccess", username)
    };

    const createSteps = async (product_id) => {
        try {
            const response = await axios.post(`${BASE_URL}/create_steps/${product_id}`,
                {
                    id_step: product_id,
                    time_start: currentDateTimeThailand,
                    time_end: "...",
                    sub_steps1: {
                        ประกอบเซลล์โฮลเดอร์: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดอุปกรณ์ที่กล่องแบตเตอรรี่: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ประกอบเซลล์แบตเตอรี่เข้ากับเซลล์โฮเดอร์: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เจาะเตเปอร์บัสบาร์: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ประกอบ_BMS_and_Active_เข้าเพลทยึด: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ประกอบบอร์ดDry_Contact_เดินสาย_Comm_low_Comm_high: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งสาย_S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_การเดินสายไฟ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ประกอบลงกล่อง: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เดินสายขั้ว_บวก_ลบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เก็บสายไฟ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อยก่อนทดสอบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ตั้งค่า_BMS: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ชาร์จก่อนทดสอบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ทดสอบแบต: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ชาร์จหลังทดสอบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อยก่อนปิดฝา: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ปิดฝากล่องแบตเตอรี่: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดสติ๊กเกอร์_S_N_วารันตี: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        }
                    },
                    sub_steps2: {
                        ติดอุปกรณ์หน้ากล่อง_Con_trol: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งเบรกเกอร์_400_A: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้ง_คอนแทรคเตอร์: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งเทอมินอลหลังกล่อง: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งบอร์ด_Con_trol: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งชุดสายไฟ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อย_กล่อง_Con_trol: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        }
                    },
                    sub_steps3: {
                        บาลานซ์เซลล์_6Ah_32700: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        สปอตแบตเตอรี่_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เดินสายไฟแบตเตอรี่_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้ง_BMS_Active_สําหรับแบต_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_การเดินสายไฟแบตเตอรี่_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ตั้งค่า_BMS_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ทดสอบแบต_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อย_แบตไฟเลี้ยงพัดลม_16S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        สปอตแบตเตอรี่_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งสาย_S_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้ง_BMS_Active_สําหรับแบต_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_การเดินสายไฟแบตเตอรี่_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ตั้งค่า_BMS_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ทดสอบแบต_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อย_แบตไฟเลี้ยงพัดลม_8S: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งเครื่องชาร์จ_48V_ที่กล่องแบตไฟเลี้ยงพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งเครื่องชาร์จ_24V_ที่กล่องแบตไฟเลี้ยงพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งปลั้กหน้าแปลนที่ก้นกล่องแบตไฟเลี้ยงพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ตั้งค่าเครื่องชาร์จ_48V: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ตั้งค่าเครื่องชาร์จ_24V: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ทดสอบการใช้งานกล่องไฟเลี้ยงพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อยกล่องไฟเลี้ยงพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        }
                    },
                    sub_steps4: {
                        ประกอบแรค: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งกล่องControlที่แรค: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งกล่องไฟเลี้ยงระบบที่แรค: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ติดตั้งแบตเตอรี่ที่แรค: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เดินสายพัดลม: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        เดินสายไฟ_ขั้ว_บวก_ขั้ว_ลบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ต่อสายอนุกรมหน้ากล่อง: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ต่อสายบาลานซ์หน้ากล่อง: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อย: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        }
                    },
                    sub_steps5: {
                        ชาร์จก่อนทดสอบระบบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        QC_ความเรียบร้อยก่อนทดสอบระบบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ทดสอบระบบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        },
                        ชาร์จหลังทดสอบ: {
                            completed: true,
                            name: "...",
                            time_start: "...",
                            time_end: "..."
                        }
                    }
                }
            );
            if (response.status === 200) {
                navigation.navigate("Preview", {
                    product_id,
                    username,
                });
                console.log("success")
            }
        } catch (error) {
            console.log("error create product:", error)
            console.log("create error", username)
            console.log("create error", product_id)
            navigation.navigate("Preview", {
                product_id,
                username,
            });
        }
    };


    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };


    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };


    return (
        <View style={styles.centerText}>
            <CustomAlert visible={alertVisible} message={alertMessage} onClose={hideAlert} onContinue={Continue} onCancel={hideAlert} />
            <QRCodeScanner
                reactivate={true}
                reactivateTimeout={3000}
                onRead={onSuccess}
                flashMode={torchEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                topContent={
                    <View style={styles.overlayContainer}>
                        <Text>{username}</Text>
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
