import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';

const PreviewStage = ({ route }) => {

    const { stage, endtime } = route.params;

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {stage && !isNaN(stage) ? (
                    Array.from({ length: stage }, (_, index) => (
                        <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 50,
                                    borderWidth: 3,
                                    borderColor: endtime !== "..." ? '#D3D3D3' : (index + 1 === stage ? '#3CC969' : '#EBEDEE'),
                                    width: endtime !== "..." ? 60 : (index + 1 === stage ? 70 : 60),
                                    height: endtime !== "..." ? 60 : (index + 1 === stage ? 70 : 60),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'white'
                                }}
                            >
                                {endtime !== "..." ? (
                                    <Image
                                        source={require('../../assets/check.png')}
                                        style={{ width: 30, height: 30, margin: 20 }}
                                    />
                                ) : (
                                    index + 1 === stage ? (
                                        <Text style={{ color: '#3CC969', fontWeight: 'bold' }}>S{index + 1}</Text>
                                    ) : (
                                        <Image
                                            source={require('../../assets/check.png')}
                                            style={{ width: 30, height: 30, margin: 20 }}
                                        />
                                    )
                                )}
                            </TouchableOpacity>
                            <View style={{ borderColor: '#21C372', borderWidth: 1, height: 50, width: 2 }}></View>
                        </View>
                    ))
                ) : (
                    <ProgressDialog loaderColor={"orange"} label={'Please wait'} />
                )}
                <TouchableOpacity style={{
                    borderRadius: 50,
                    borderWidth: 5,
                    borderColor: endtime !== "..." ? 'red' : '#D3D3D3',
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>
                    <Text style={{ color: endtime !== "..." ? 'red' : '#D3D3D3', fontWeight: 'bold' }}>End</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PreviewStage;