import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import { BASE_URL } from '@env';

export default hookQRcode = (navigation) => {
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');
    const [torchEnabled, setTorchEnabled] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [product_id, setProductid] = useState('')

    const showAlert = (message) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const hideAlert = () => {
        setAlertVisible(false);
    };

    const Continue = async () => {
        await createSteps(product_id)
    }

    const onSuccess = async (e) => {
        const scannedProductId = e.data;
        showAlert("คุณต้องการดำเนินการต่อใช่หรือไม่?")
        setProductid(scannedProductId);
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
                    product_id
                });
                console.log(product_id)
                console.log("success")
            }
        } catch (error) {
            console.log("error create product:", error)
            console.log(product_id)
            console.log(`${BASE_URL}/create_steps/${product_id}`)
            navigation.navigate("Preview", {
                product_id
            });
        }
    };



    const toggleTorch = () => {
        setTorchEnabled(!torchEnabled);
    };

    return {
        torchEnabled, toggleTorch, onSuccess, alertVisible,
        alertMessage,
        showAlert,
        hideAlert,
        Continue,
    };
};
