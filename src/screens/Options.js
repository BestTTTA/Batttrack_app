import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Options = ({ route,navigation }) => {

    const {user_id,username} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.containerlogo}>

            </View> 
            <View style={styles.containoptions}>
                <View style={styles.optionsname}>
                    <Text style={{ color: "gray", fontWeight: 'bold' }}>Options</Text>
                </View>
                <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Qrcode",{
                    user_id,
                    username
                })}>
                    <View style={styles.containbox}>
                        <Image
                            source={require('../../assets/qr-code.png')}
                            style={{ width: 40, height: 40, margin: 20, }}
                        />
                        <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }}>Start Process</Text>
                    </View>
                    <Image
                        source={require('../../assets/right-arrow.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Products")}>
                    <View style={styles.containbox}>
                        <Image
                            source={require('../../assets/product.png')}
                            style={{ width: 40, height: 40, margin: 20 }}
                        />
                        <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }} >Products</Text>
                    </View>
                    <Image
                        source={require('../../assets/right-arrow.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.containlogout} onPress={() => navigation.navigate("Login")}>
                <View style={styles.containboxlogout}>
                    <Image
                        source={require('../../assets/logout.png')}
                        style={{ width: 40, height: 40, marginRight: 15 }}
                    />
                    <Text style={{ color: "red", fontWeight: 'bold', fontSize: 15 }}>LOGOUT</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.containertextfield}>

            </View>
        </View>
    )
}
export default Options

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6600',
    },
    containerlogo: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6600',
        width: '100%',
        zIndex: 1,
    },
    containertextfield: {
        flex: 0.75,
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingTop: 30,
        width: '100%',
        zIndex: 1,
    },
    containoptions: {
        flex: 1,
        borderRadius: 20,
        height: '70%',
        width: '80%',
        zIndex: 2,
        borderColor: 'gray',
        position: 'absolute',
        top: 100,
        left: "10%",
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
    },

    containlogout: {
        borderRadius: 20,
        height: '10%',
        width: '80%',
        zIndex: 2,
        borderColor: 'gray',
        position: 'absolute',
        top: 700,
        left: "10%",
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        padding: 20,
    },
    containbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "100%"
    },
    containboxlogout: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "100%"
    },
    optionsall: {
        padding: 10,
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderColor: 'gray',
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        flexDirection: 'row',
    },
    optionsname: {
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: '100%',
        borderColor: 'gray',
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
    },

    textRegister: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff6600',
        textDecorationLine: 'underline',
    },
    customButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 30,
        width: '50%',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
    },
    containButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    containButtonregister: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderColor: '#ff6600',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        height: 40,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 7,
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

});
