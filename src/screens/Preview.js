import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Button, ActivityIndicator, StyleSheet } from 'react-native';
import Checklist from "../components/Checklist";
import { BASE_URL } from '@env';
import tw from 'twrnc';
import axios from 'axios';
import ProgressDialog from 'react-native-progress-dialog';

const Preview = ({ navigation, route }) => {
    const { product_id, username } = route.params;
    const [responsePreivew, setResponsepreview] = useState("")

    const [loading, setLoding] = useState(false)
    const showPreivew = async (product_id) => {
        setLoding(true)
        try {
            const response = await axios.get(`${BASE_URL}/step_lto/${product_id}`)
            setResponsepreview(response.data)
        } catch (error) {
            console.log("showPreivew Error", error)
            console.log("show preview", product_id)
        }
        setLoding(false)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            showPreivew(product_id);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // useEffect(() => {
    //     showPreivew(product_id);
    // }, []);

    // const renderSubSteps = (subSteps) => {
    //     return Object.entries(subSteps || {}).map(([key, value]) => (
    //         <View key={key} style={styles.stepContainer}>
    //             <Text style={styles.text}>Step: {key}</Text>
    //             <Text style={styles.text}>Completed: {value.completed ? 'Yes' : 'No'}</Text>
    //         </View>
    //     ));
    // };

    return (
        <View style={tw`flex h-full flex-col justify-between bg-orange-600 p-4`}>
            <View style={tw`bg-white h-full rounded-xl p-2`}>
                <ScrollView style={tw`bg-white`}>
                    <Text style={styles.textID}>PROJECT ID: {responsePreivew.id_step}</Text>
                    <Text style={styles.text}>START: {responsePreivew.time_start}</Text>
                    <Text style={styles.text}>END: {responsePreivew.time_end}</Text>
                    <View style={styles.customUnderline}></View>
                    {/* {responsePreivew.sub_steps1 ? renderSubSteps(responsePreivew.sub_steps1) : null} */}
                    <Checklist subs={responsePreivew.sub_steps1} endpoint="steps1" headname="ประกอบแบตLTO" product_id={product_id} user={{
                        username: username,

                    }} sub_steps="sub_steps1" />
                    <Checklist subs={responsePreivew.sub_steps2} endpoint="steps2" headname="ประกอบกล่อง Con trol" product_id={product_id} user={{
                        username: username,

                    }} sub_steps="sub_steps2" />
                    <Checklist subs={responsePreivew.sub_steps3} endpoint="steps3" headname="ประกอบแบตไฟเลี้ยงพัดลม" product_id={product_id} user={{
                        username: username,

                    }} sub_steps="sub_steps3" />
                    <Checklist subs={responsePreivew.sub_steps4} endpoint="steps4" headname="ประกอบแรค" product_id={product_id} user={{
                        username: username,

                    }} sub_steps="sub_steps4" />
                    <Checklist subs={responsePreivew.sub_steps5} endpoint="steps5" headname="ทดสอบ" product_id={product_id} user={{
                        username: username,

                    }} sub_steps="sub_steps5" />
                </ScrollView>
                <TouchableOpacity style={tw`flex justify-center items-center h-[50px] rounded-full`} onPress={() => {
                    navigation.navigate("PreviewStage", { product_id: product_id });
                }}
                >
                    <Text style={tw`text-black text-[15px] underline`}>พรีวิว ขั้นตอนสำหรับ project นี้</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Preview;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        height: '100%',
        borderRadius: 20,
        // overflow: "hidden"
    },
    containerTwo: {
        flex: 1,
        height: '100%',
        padding: 10,
        backgroundColor: '#ff6600',
    },
    text: {
        color: 'black',
        margin: 2,
        fontWeight: 'bold',
        fontSize: 10,
    },
    textID: {
        color: 'orange',
        margin: 5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    containButtoncreatestage: {
        width: '100%',
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
    },
    containButtonholding: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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
    customButtonTextHolding: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    customButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 30,
        width: '100%',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    customUnderline: {
        width: "100%",
        height: 2,
        backgroundColor: 'orange',
    }
});