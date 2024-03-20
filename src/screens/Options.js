import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Stylesoptions from '../styles/Options'

const Options = ({ route, navigation }) => {

    const { user_id, username } = route.params;
    const { styles } = Stylesoptions();

    return (
        <View style={styles.container}>
            <View style={styles.containerlogo}>
            </View>
            <View style={styles.containoptions}>
                <View style={styles.optionsname}>
                    <Text style={{ color: "gray", fontWeight: 'bold' }}>{username}</Text>
                </View>
                <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Qrcode", {
                    username: username,
                })}>
                    <View style={styles.containbox}>
                        <Image
                            source={require('../../assets/qr-code.png')}
                            style={{ width: 40, height: 40, margin: 20, }}
                        />
                        <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }}>ตรวจสอบโปรดัก</Text>
                    </View>
                    <Image
                        source={require('../../assets/right-arrow.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                {username === "Admin" ? (
                    <>
                        <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Products")}>
                            <View style={styles.containbox}>
                                <Image
                                    source={require('../../assets/product.png')}
                                    style={{ width: 40, height: 40, margin: 20 }}
                                />
                                <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }} >โปรดัก</Text>
                            </View>
                            <Image
                                source={require('../../assets/right-arrow.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Search")}>
                            <View style={styles.containbox}>
                                <Image
                                    source={require('../../assets/magnifier.png')}
                                    style={{ width: 40, height: 40, margin: 20 }}
                                />
                                <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }} >ค้นหาโปรดัก</Text>
                            </View>
                            <Image
                                source={require('../../assets/right-arrow.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    </>
                ) : <>
                    {/* <TouchableOpacity style={styles.optionsall} onPress={() => navigation.navigate("Myproduct", {
                        user_id: user_id
                    })}>
                        <View style={styles.containbox}>
                            <Image
                                source={require('../../assets/magnifier.png')}
                                style={{ width: 40, height: 40, margin: 20 }}
                            />
                            <Text style={{ color: "black", fontWeight: 'bold', fontSize: 15 }} >งานของฉัน</Text>
                        </View>
                        <Image
                            source={require('../../assets/right-arrow.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity> */}
                </>}

            </View>
            <TouchableOpacity style={styles.containlogout} onPress={() => navigation.navigate("Login")}>
                <View style={styles.containboxlogout}>
                    <Image
                        source={require('../../assets/logout.png')}
                        style={{ width: 40, height: 40, marginRight: 15 }}
                    />
                    <Text style={{ color: "red", fontWeight: 'bold', fontSize: 15 }}>ออกจากระบบ</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.containertextfield}>

            </View>
        </View>
    )
}
export default Options

