// Preview.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import ProgressDialog from 'react-native-progress-dialog';
import LinearGradient from 'react-native-linear-gradient';
import hookProductReview from '../hooks/hookProductReview';
import StylePreviewProduct from '../styles/PreviewProduct'

const Preview = ({ route, navigation }) => {
    const { product_id, user_id, username, render } = route.params;
    const { styles } = StylePreviewProduct();

    const {
        product,
        isLoading,
        stage,
        endtime,
        isHolding,
        holdingResponse,
        updateStage,
        endStage,
        endStageEmployee,
        handlePress
    } = hookProductReview(product_id, user_id, username, render);

    if (!product) {
        return <ProgressDialog visible={true} loaderColor={"orange"} label={'Please wait'} />
    }

    return (
        <>
            {holdingResponse === "stop" ? (
                <View style={styles.container}>
                    {isLoading ? <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} /> : null}
                    <View style={styles.containProduct}>
                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 50, fontWeight: 'bold', color: 'orange'
                            }}>{product.product_id}</Text>
                        </View>
                        <Text style={styles.text}>Start Work: {product.start_time}</Text>
                        <Text style={styles.text}>End Work: {product.end_time}</Text>
                        <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
                            <Text style={styles.text}>Stage Work: {product.current_stage}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PreviewStage', {
                                stage,
                                endtime
                            })}>
                                <Text style={styles.textstage}>Preview Stage</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 6,
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>EMPLOYEES</Text>
                        </View>
                        <ScrollView >
                            {product.employees.map(worker => (
                                <View style={styles.worker} key={worker.user_id}>
                                    <Text style={styles.text}>User Name: {worker.name}</Text>
                                    <Text style={styles.text}>Stage Work: {worker.current_stage}</Text>
                                    <Text style={styles.text}>Start Work: {worker.start_time}</Text>
                                    {/* <Text style={styles.text}>End Work: {worker.end_time}</Text> */}
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    {endtime === "..." ? (<View style={styles.containButton}>
                        <TouchableOpacity
                            onPress={endStage}
                            style={styles.containButtonregister}
                        >
                            <Text style={styles.customButtonTextRegister}>END STAGE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={updateStage}
                            style={styles.ButtonLogin}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#F5A928', '#F0891B', '#FF7600']}
                                style={styles.customButton}
                            >
                                <Text style={styles.customButtonText}>NEXT STAGE</Text>
                                <Image
                                    source={require('../../assets/arrowwhite.png')}
                                    style={{ width: 20, height: 20, marginLeft: 5 }}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>) : (<View></View>)
                    }
                    {endtime === "..." ? (<View style={styles.containButton}>
                        <TouchableOpacity
                            onPress={handlePress}
                            style={styles.containButtonholding}
                        >
                            <Text style={[styles.customButtonTextHolding, { color: isHolding ? 'red' : '#7A7A7A' }]}>
                                {isHolding ? 'STOP HOLDING' : 'START HOLDING'}
                            </Text>
                        </TouchableOpacity>
                    </View>) : (<View></View>)}
                </View>) : (
                <View style={styles.container}>
                    {isLoading ?
                        <ProgressDialog visible={isLoading} loaderColor={"orange"} label={'Please wait'} /> : null}
                    <View style={styles.containHolding}>
                        <Image
                            source={require('../../assets/timeclock.png')}
                            style={{ width: 300, height: 300, margin: 20, }}
                        />
                    </View>
                    {holdingResponse === "holding" ? (<View style={styles.containButton}>
                        <TouchableOpacity
                            onPress={handlePress}
                            style={styles.containButtonholding}
                        >
                            <Text style={[styles.customButtonTextHolding, { color: holdingResponse === "holding" ? 'red' : '#7A7A7A' }]}>
                                {holdingResponse === "holding" ? 'STOP HOLDING' : 'START HOLDING'}
                            </Text>
                        </TouchableOpacity>
                    </View>) : (<View></View>)}
                </View>)
            }
        </>
    );
};

export default Preview;



