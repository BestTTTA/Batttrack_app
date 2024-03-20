import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl, Alert } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import { BASE_URL } from '@env';
import ProgressDialog from 'react-native-progress-dialog';

const PreviewStage = ({ route }) => {
    const { product_id } = route.params;
    const [responsePreivew, setResponsepreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState("");

    const showPreivew = async (id) => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`${BASE_URL}/step_lto/${id}`);
            setResponsepreview(response.data);
        } catch (error) {
            console.error("showPreivew Error", error);
            setError("Failed to load data. Please try again.");
            Alert.alert("Error", "Failed to load data. Please try again.");
        }
        setLoading(false);
    };

    useEffect(() => {
        showPreivew(product_id);
    }, [product_id]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        showPreivew(product_id).then(() => setRefreshing(false));
    }, [product_id]);

    const renderSubSteps = (subSteps) => {
        const entries = Object.entries(subSteps || {});
        return (
            <View style={tw`p-4 py-6`}>
                {entries.map(([key, value], index) => (
                    <View key={key}>
                        {index !== 0 && (
                            <View style={tw`w-[1px] h-[70px] ml-[12px] bg-black`} />
                        )}
                        <View style={tw`flex flex-row items-center`}>
                            <View style={[tw`w-6 h-6 rounded-full justify-center items-center`,
                            value.time_start === "..." && value.name === "..." ? tw`bg-red-500` :
                                value.completed ? tw`bg-yellow-500` : tw`bg-green-500`]}>
                                <Text style={tw`text-white text-xs`}>{index + 1}</Text>
                            </View>
                            {value.time_start === "..." && value.name === "..." ? (
                                <View style={tw`flex-1 ml-2`}>
                                    <Text style={tw`text-black`}>ขั้นตอน: {key}</Text>
                                    <Text style={tw`text-black`}>สถานะ: ยังไม่ดำเนินการ</Text>
                                    {value.name && <Text style={tw`text-black`}>ชื่อผู้ทำ: {value.name}</Text>}
                                </View>
                            ) : value.completed ? (
                                <View style={tw`flex-1 ml-2`}>
                                    <Text style={tw`text-black`}>ขั้นตอน: {key}</Text>
                                    <Text style={tw`text-black`}>สถานะ: กำลังดำเนินการ</Text>
                                    {value.name && <Text style={tw`text-black`}>ชื่อผู้ทำ: {value.name}</Text>}
                                </View>
                            ) : (
                                <View style={tw`flex-1 ml-2`}>
                                    <Text style={tw`text-black`}>ขั้นตอน: {key}</Text>
                                    <Text style={tw`text-black`}>สถานะ: ดำเนินการเสร็จสิ้น</Text>
                                    {value.name && <Text style={tw`text-black`}>ชื่อผู้ทำ: {value.name}</Text>}
                                </View>
                            )}
                        </View>
                    </View>
                ))}
            </View>

        );
    };

    const Line = ({step}) => {
        return (
            <View className={tw`flex`}>
                <View style={tw`flex w-full flex-row justify-center`}>
                    <View style={tw`flex-1 w-full bg-black h-[1px] my-4`}></View>
                    <Text style={tw`m-2 text-black`}>ขั้นตอนที่: {step}</Text>
                    <View style={tw`flex-1 w-full bg-black h-[1px] my-4`}></View>
                </View>
            </View>
        );
    };




    return (
        <>
            <ProgressDialog visible={loading} label="Loading..." loaderColor={"orange"} />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                className={tw`flex`}
            >
                {error ? (
                    <View style={tw`flex flex-1 items-center justify-center`}>
                        <Text style={tw`text-red-500 text-lg`}>{error}</Text>
                    </View>
                ) : (
                    <View className={tw`flex`}>
                        <Line step={1} />
                        {responsePreivew.sub_steps1 ? renderSubSteps(responsePreivew.sub_steps1) : null}
                        <Line step={2} />
                        {responsePreivew.sub_steps2 ? renderSubSteps(responsePreivew.sub_steps2) : null}
                        <Line step={3} />
                        {responsePreivew.sub_steps3 ? renderSubSteps(responsePreivew.sub_steps3) : null}
                        <Line step={4} />
                        {responsePreivew.sub_steps4 ? renderSubSteps(responsePreivew.sub_steps4) : null}
                        <Line step={5} />
                        {responsePreivew.sub_steps5 ? renderSubSteps(responsePreivew.sub_steps5) : null}
                    </View>
                )}
            </ScrollView>
        </>
    );
};

export default PreviewStage;
